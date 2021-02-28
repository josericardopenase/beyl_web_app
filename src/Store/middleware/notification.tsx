
import axios from 'axios'
import { request } from 'https'
import { apiUrl } from '../../Api/apiClient'
import { callFailed , callSuccess, callBegan} from '../apiActions'
import { addNotification, pushNotification, shiftNotification } from '../notifications'

let many : number = 0
const notificationTime : number = 4000;

const notification = ({dispatch, getState} : any)=> (next :any) => async (action : any) => {


    if(action.type !== pushNotification.type) {

        next(action)

    }else{
    


        many++;


        await setTimeout(() => {
            console.log("hello")
        
            dispatch(addNotification(action.payload));

            setTimeout(() => {

                dispatch(shiftNotification({}))
                many--;

            }, notificationTime)
        
        }, notificationTime * (many - 1) + 600 * many)



    }
}


export default notification