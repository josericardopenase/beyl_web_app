import {createSlice} from '@reduxjs/toolkit'



const notifications = createSlice({
    name : "notifications",
    initialState : {
        loading : false,
        list: [{
            titulo : "me cago en dios",
            icono : "pene",
            time: "18-11-2001"
        }]
    },
    reducers : {
        addNotification: (state : any, action : any) => {
            //add notification
            state.list = action.payload;
        },
        removeNotification: (state : any, action : any) => {
            //remove notification
        },
        patchNotification : (state : any, action : any) => {
            //remove notification
        },
        todoReceived : (state : any, action : any) => {
            // request todos finished
        },
        todoRequest : (state : any, action : any) => {
            // start request todos
        },
    }
});



export const name = notifications.name
export const {addNotification, removeNotification, patchNotification} = notifications.actions
export default notifications.reducer