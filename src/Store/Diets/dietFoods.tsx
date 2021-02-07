import { createSlice } from '@reduxjs/toolkit'
import { callBegan, callFailed } from '../apiActions'
import reorder , {reorder_excersise}from '../Utils/reorder';

const dietFood = createSlice({
    name: 'food',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        addFood : (state : any, action : any) => {
            state.loading = false;
            state.list.push(action.payload)
        },
        addMultipleFood : (state : any, action : any) =>{

            state.loading = false;
            const arr3 = state.list.filter((x : any) => !action.payload.some((y : any) => y.id == x.id))
            arr3.push(...action.payload)
            state.list = arr3
        },
        removeFood : (state : any, action : any) => {
            state.loading = false;
            state.list.splice(state.list.findIndex((day : any) => action.payload.id === day.id), 1) 
        },
        startRequest : (state : any, action : any) => {
        },

        reorderFood: (state : any, action : any) => {

            //reordenamiento total causa errores aqui, hay que ordenar por grupos, no por todos.
            state.list = reorder(state, action)
        },
        modifyFood : (state : any, action : any) => {
            const index = state.list.findIndex((group : any) => action.payload.id === group.id);
            state.list[index].anotation = action.payload.anotation;
            //state.list = state.list.sort((a : any ,b : any) => a.order - b.order)
        },

    }
})


export const getFoodOfGroup = (id : number ) => callBegan({
    url : '/diet_food/?group=' + id,
    onSuccess : 'food/addMultipleFood',
    onError : callFailed.type,
    onBegin : 'food/startRequest'
})

export const postDietFood = (data : any ) => callBegan({
    url : '/diet_food/',
    onSuccess : 'food/addFood',
    method : 'post',
    data: data,
    onError : callFailed.type,
    onBegin : 'food/startRequest'
})

export const deleteDietFood = (id :number ) => callBegan({
    url : '/diet_food/' + id + "/",
    onSuccess : 'food/removeFood',
    method : 'delete',
    onError : callFailed.type,
    onBegin : 'food/startRequest',
    payload: {id : id}
})

export const reorderFood = (id : number, order : number ) => callBegan({
    url : '/diet_food/' + id + "/",
    onBegin : 'food/reorderFood',
    method : 'patch',
    data : {id : id, order : order},
    payload : {id : id, order : order},
    onError : callFailed.type,
})

export const patchDietFood = (todo : any ) => callBegan({
    url : '/diet_food/' + todo.id + "/",
    onSuccess : 'food/modifyFood',
    method : 'patch',
    data : todo,
    onError : callFailed.type,
})

export const name =  dietFood.name;
export default dietFood.reducer;
