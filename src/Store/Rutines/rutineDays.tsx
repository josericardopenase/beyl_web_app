import { createSlice } from '@reduxjs/toolkit'
import { callBegan, callFailed } from '../apiActions';
import reorder from '../Utils/reorder';

const rutineDays = createSlice({
    name: 'days',
    initialState: {
        list: [],
        selectedDay :  undefined,
        loading: true,
        lastFetch: null
    },
    reducers: {

        addDay: (state : any, action : any) => {
            state.loading = false;
            state.list.push(action.payload)
        },
        addMultipleDays : (state : any, action : any) => {

            state.loading = false;
            state.list = action.payload

        },
        removeDay: (state : any, action : any) => {

            state.list.splice(state.list.findIndex((day : any) => action.payload.id === day.id), 1) 

        },
        retrieveDay : (state : any, action : any) => {

            const index = state.list.findIndex((day : any) => action.payload.id === day.id);
            state.list[index] = action.payload;

            /*             state.list = state.list.sort((a,b) => a.order - b.order) */
        },
        dayRequest : (state : any, action : any) => {

            state.loading = true;

        },
        setSelectedDay : (state : any, action : any) => {

            state.selectedAthlete = action.payload; 

        },
        reorderDays: (state : any, action : any) => {

            state.list = reorder(state, action)
        }
    }
});


export const getDay = (id : number ) => callBegan({
    url : '/rutine_day/' + id + "/",
    onSuccess : 'days/addDay',
    onError : callFailed.type,
    onBegin : 'days/dayReceived'
})

export const getDaysOfRutine = (id : number ) => callBegan({
    url : '/rutine_day/?rutine=' + id ,
    onSuccess : 'days/addMultipleDays',
    onError : callFailed.type,
    onBegin : 'days/dayReceived'
})

export const deleteDay = (id : number ) => callBegan({
    url : '/rutine_day/' + id + "/",
    method : 'delete',
    onSuccess : 'days/removeDay',
    onError : callFailed.type,
    onBegin : 'days/dayReceived',
    payload: {id : id}
})


export const patchDay = (todo : any ) => callBegan({
    url : '/rutine_day/' + todo.id + "/",
    onSuccess : 'days/retrieveDay',
    method : 'patch',
    data : todo,
    onError : callFailed.type,
})

export const reorderDay = (id : number, order : number ) => callBegan({
    url : '/rutine_day/' + id + "/",
    onBegin : 'days/reorderDays',
    method : 'patch',
    data : {id : id, order : order},
    payload : {id : id, order : order},
    onError : callFailed.type,
})
export const postDay = (todo : any ) => callBegan({
    url : '/rutine_day/',
    onSuccess : 'days/addDay',
    method : 'post',
    data : todo,
    onError : callFailed.type,
})



export const name =  rutineDays.name;
export default rutineDays.reducer;