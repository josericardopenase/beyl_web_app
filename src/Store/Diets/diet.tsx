import { createSlice } from '@reduxjs/toolkit'
import { callBegan, callFailed } from '../apiActions';

const diets = createSlice({
    name: 'diets',
    initialState: {
        list: [],
        loading: true,
        lastFetch: null,
    },

    reducers : {
        addDiet : (state: any, action : any) => {
            state.loading = false;
            state.list.splice(state.list.findIndex((day : any) => action.payload.id === day.id), 1) 
            state.list.push(action.payload);
        },
        dietRequest : (state : any, action : any) => {
            state.loading = true;
        },
    }
});

export const getDiet = (id : number) => callBegan( {
    url : '/diet/' + id + "/",
    onSuccess : 'diets/addDiet',
    onError : callFailed.type,
    onBegin : 'diets/dietRequest'
})


export const name =  diets.name;
export default diets.reducer;
