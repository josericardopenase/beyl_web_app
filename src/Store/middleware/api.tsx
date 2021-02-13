import axios from 'axios'
import { request } from 'https'
import { callFailed , callSuccess, callBegan} from '../apiActions'


const api = ({dispatch, getState} : any)=> (next :any) => async (action : any) => {
    if(action.type !== callBegan.type) {

        next(action)

    }else{
    
        const {url, method, data, onSuccess, onError, onBegin, payload} = action.payload

        if(onBegin)
            if(payload)
                dispatch({ type : onBegin,  payload : payload});
            else
                dispatch({ type : onBegin});


        try {

            const token = getState().auth.token
        
            const response = await axios.request({ baseURL : 'http://192.168.0.14:9000/v1', url, method, data, headers : token ? {'Authorization' : `Token ${token}` } : null })
            
            const requestPayload = payload ? payload : response.data;

            console.log(requestPayload);

            if(onSuccess)
                dispatch({type: onSuccess, payload: requestPayload})
            else
                dispatch(callSuccess(response.data));

        } catch(error) {

            if(onError){
                dispatch({type: onError, payload: error.response ? error.response.data : error})
            }

            dispatch(callFailed(error));

        }
    }
}


export default api
