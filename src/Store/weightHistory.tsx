import { createSlice } from '@reduxjs/toolkit'
import { callBegan, callFailed } from './apiActions';

const weightHistory = createSlice({
    name: 'weightHistory',
    initialState: {
        list: [],
        loading: true,
        lastFetch: null,
    },

    reducers : {
        setWeightHistory : (state: any, action : any) => {
            state.loading = false;
            state.list = action.payload.results;
        }, 
        weightHistoryRequest : (state : any, action : any) => {
            state.loading = true;
        },
    }
});

export const getWeightHistoryFromUser = (idUser : number) => callBegan( {
    url : '/weight_history/?page_size=10&user=' + idUser ,
    onSuccess : 'weightHistory/setWeightHistory',
    onError : callFailed.type,
    onBegin : 'weightHistoryRequest/weightHistoryRequest'
})


export const name =  weightHistory.name;
export default weightHistory.reducer;
