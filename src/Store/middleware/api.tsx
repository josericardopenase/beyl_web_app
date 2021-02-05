import axios from 'axios'
import { request } from 'https'
import { callFailed , callSuccess, callBegan} from '../apiActions'


const api = ({dispatch} : any)=> (next :any) => async (action : any) => {
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

            const response = await axios.request({ baseURL : 'http://127.0.0.1:8000/v1', url, method, data, headers : {'Authorization' : "Token 827a9e27f9f29b1f1c1c9f61a49fac631bc9a0f0" } })
            
            const requestPayload = payload ? payload : response.data;

            console.log(requestPayload);

            if(onSuccess)
                dispatch({type: onSuccess, payload: requestPayload})
            else
                dispatch(callSuccess(response.data));

        } catch(error) {

            dispatch(callFailed(error));

        }
    }
}


export default api
