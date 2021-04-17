import { createSlice } from '@reduxjs/toolkit'
import { callBegan, callFailed } from '../apiActions';
import reorder from '../Utils/reorder';

const dietDays = createSlice({
    name: 'dietDays',
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
        addMultipledietDays : (state : any, action : any) => {

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
        reorderDietDays: (state : any, action : any) => {

            state.list = reorder(state, action)
        }
    }
});


export const getDietDay = (id : number ) => callBegan({
    url : '/diet_day/' + id + "/",
    onSuccess : 'dietDays/addDay',
    onError : callFailed.type,
    onBegin : 'dietDays/dayReceived'
})

export const getDietDaysOfDiet = (id : number ) => callBegan({
    url : '/diet_day/?diet=' + id,
    onSuccess : 'dietDays/addMultipledietDays',
    onError : callFailed.type,
    onBegin : 'dietDays/dayReceived'
})

export const deleteDietDay = (id : number ) => callBegan({
    url : '/diet_day/' + id + "/",
    method : 'delete',
    onSuccess : 'dietDays/removeDay',
    onError : callFailed.type,
    onBegin : 'dietDays/dayReceived',
    payload: {id : id}
})


export const patchDietDay = (todo : any ) => callBegan({
    url : '/diet_day/' + todo.id + "/",
    onSuccess : 'dietDays/retrieveDay',
    method : 'patch',
    data : todo,
    onError : callFailed.type,
})

export const reorderDietDay = (id : number, order : number ) => callBegan({
    url : '/diet_day/' + id + "/",
    onBegin : 'dietDays/reorderDietDays',
    method : 'patch',
    data : {id : id, order : order},
    payload : {id : id, order : order},
    onError : callFailed.type,
})
export const postDietDay = (todo : any ) => callBegan({
    url : '/diet_day/',
    onSuccess : 'dietDays/addDay',
    method : 'post',
    data : todo,
    onError : callFailed.type,
})



export const name =  dietDays.name;
export default dietDays.reducer;