import axios from 'axios'
import { request } from 'https'
import { apiUrl } from '../../Api/apiClient'
import { callFailed , callSuccess, callBegan} from '../apiActions'
import { ApiProps } from '../Interfaces/api'
import { pushNotification } from '../notifications'


const api = ({dispatch, getState} : any)=> (next :any) => async (action : any) => {


    if(action.type !== callBegan.type) {

        next(action)

    }else{
    
        const {url, method, data, onSuccess, onError, onBegin, payload, notifyOnSuccess, notifyOnError} = action.payload

        if(onBegin)
            if(payload)
                dispatch({ type : onBegin,  payload : payload});
            else
                dispatch({ type : onBegin});


        try {

            const token = getState().auth.token
        
            const response = await axios.request({ baseURL : apiUrl, url, method, data, headers : token ? {'Authorization' : `Token ${token}` } : null })
            
            const requestPayload = payload ? payload : response.data;

            if(onSuccess)
                dispatch({type: onSuccess, payload: requestPayload})
            else
                dispatch(callSuccess(response.data));


            if(notifyOnSuccess){
                dispatch(pushNotification(notifyOnSuccess)) 
            }

        } catch(error) {

            if(onError){
                dispatch({type: onError, payload: error.response ? error.response.data : error})
            }

            dispatch(callFailed(error));
            
            if(notifyOnError){
                dispatch(pushNotification(notifyOnError)) 
            }

        }
    }
}


export default api
