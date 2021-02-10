import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { callBegan, callFailed } from './apiActions';

interface articles{
    title   : string,
    texto   : string,
    image   : string,
    author  : string,
    created : string,
}


const articles = createSlice({
    name : "articles",
    initialState : {
        loading : true,
        list: []
    },
    reducers : {
        refreshArticles: (state : any, action : any) => {
            state.loading = false
            state.list = action.payload.results;
        },
    }
});

export const getArticles = () => callBegan( {
    url : '/articles/?page_size=3',
    onSuccess : 'articles/refreshArticles',
    onError : callFailed.type,
    onBegin : 'generalHistoryRequest/generalHistoryRequest'
})

export const name = articles.name
export const {refreshArticles} = articles.actions
export default articles.reducer