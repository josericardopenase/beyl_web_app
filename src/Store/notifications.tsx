import {createAction, createSlice} from '@reduxjs/toolkit'


let id = 0;

const notifications = createSlice({
    name : "notifications",
    initialState : {
        loading : false,
        queue : [],
        popup : null,
    },
    reducers : {
        addNotification: (state : any, action : any) => {
            //add notification
            state.queue.push({...action.payload, id : id});
            id++;
        },
        shiftNotification: (state : any, action : any) => {
            //remove notification
            state.queue.shift();
        },
        showPopUp: (state : any, action: any) => {
            if(state.popup === null){
                state.popup = action.payload
            }
        },
        closePopUp : (state : any) => {
            state.popup = null 
        }
    }
});




export const pushNotification = createAction<any>("notification/pushNotification")

export const name = notifications.name
export const {addNotification, shiftNotification, showPopUp, closePopUp} = notifications.actions
export default notifications.reducer