import {createSlice, PayloadAction} from '@reduxjs/toolkit'

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
        loading : false,
        list: [{
            title: "me cago en tupu",
            texto: "esto es un texto del articulo",
            image: "https://www.bicicarm.es/wp-content/uploads/2019/03/shutterstock_169282331FILEminimizer.jpg",
            author : "Jose Peña Seco",
            created : "29-11-2001"
        }]
    },
    reducers : {
        refreshArticles: (state : any, action : PayloadAction<articles>) => {
            state.list = action.payload;
        },
    }
});


export const name = articles.name
export const {refreshArticles} = articles.actions
export default articles.reducer