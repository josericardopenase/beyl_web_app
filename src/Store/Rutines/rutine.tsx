import { createSlice } from '@reduxjs/toolkit'
import { callBegan, callFailed } from '../apiActions';

const rutines = createSlice({
    name: 'rutines',
    initialState: {
        list: [],
        loading: true,
        lastFetch: null,
    },

    reducers : {
        addRutine : (state: any, action : any) => {
            state.loading = false;
            state.list.splice(state.list.findIndex((day : any) => action.payload.id === day.id), 1) 
            state.list.push(action.payload);
        },
        rutineRequest : (state : any, action : any) => {
            state.loading = true;
        },
    }
});

export const getRutine = (id : number) => callBegan( {
    url : '/rutine/' + id,
    onSuccess : 'rutines/addRutine',
    onError : callFailed.type,
    onBegin : 'rutines/rutineRequest'
})


export const name =  rutines.name;
export default rutines.reducer;