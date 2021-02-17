import {createSlice} from '@reduxjs/toolkit'


let id = 0;

const notifications = createSlice({
    name : "notifications",
    initialState : {
        loading : false,
        queue : []
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
    }
});





export const name = notifications.name
export const {addNotification, shiftNotification} = notifications.actions
export default notifications.reducer