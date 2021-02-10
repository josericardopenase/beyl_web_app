import { createSlice } from '@reduxjs/toolkit'
import { callBegan, callFailed } from './apiActions';

const generalHistory = createSlice({
    name: 'generalHistory',
    initialState: {
        list: [],
        loading: true,
        lastFetch: null,
    },

    reducers : {
        setGeneralHistory : (state: any, action : any) => {
            state.loading = false;
            state.list = action.payload.results;
        }, 
        generalHistoryRequest : (state : any, action : any) => {
            state.loading = true;
        },
    }
});

export const getGeneralHistoryFromUser = (idUser : number) => callBegan( {
    url : '/general_history/?page_size=5&user=' + idUser ,
    onSuccess : 'generalHistory/setGeneralHistory',
    onError : callFailed.type,
    onBegin : 'generalHistoryRequest/generalHistoryRequest'
})

export const getGeneralHistory = () => callBegan( {
    url : '/general_history/?page_size=4',
    onSuccess : 'generalHistory/setGeneralHistory',
    onError : callFailed.type,
    onBegin : 'generalHistoryRequest/generalHistoryRequest'
})

export const name =  generalHistory.name;
export default generalHistory.reducer;
