import { createSlice } from '@reduxjs/toolkit'
import { callBegan, callFailed } from '../apiActions'
import reorder , {reorder_excersise}from '../Utils/reorder';

const rutineExcersise = createSlice({
    name: 'excersise',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        addExcersise : (state : any, action : any) => {
            state.loading = false;
            state.list.push(action.payload)
        },
        addMultipleExcersise : (state : any, action : any) =>{

            state.loading = false;
            const arr3 = state.list.filter((x : any) => !action.payload.some((y : any) => y.id == x.id))
            arr3.push(...action.payload)
            state.list = arr3
        },
        removeExcersise : (state : any, action : any) => {
            state.loading = false;
            state.list.splice(state.list.findIndex((day : any) => action.payload.id === day.id), 1) 
        },
        startRequest : (state : any, action : any) => {
        },

        reorderExcersise: (state : any, action : any) => {

            //reordenamiento total causa errores aqui, hay que ordenar por grupos, no por todos.
            state.list = reorder_excersise(state, action)
        },
        modifyExcersise : (state : any, action : any) => {
            const index = state.list.findIndex((group : any) => action.payload.id === group.id);
            state.list[index] = {...state.list[index], ...action.payload};
            //state.list = state.list.sort((a : any ,b : any) => a.order - b.order)
        },

    }
})


export const getExcersiseOfGroup = (id : number ) => callBegan({
    url : '/rutine_excersise/?group=' + id,
    onSuccess : 'excersise/addMultipleExcersise',
    onError : callFailed.type,
    onBegin : 'excersise/startRequest'
})

export const postRutineExcersise = (data : any ) => callBegan({
    url : '/rutine_excersise/',
    onSuccess : 'excersise/addExcersise',
    method : 'post',
    data: data,
    onError : callFailed.type,
    onBegin : 'excersise/startRequest'
})

export const deleteRutineExcersise = (id :number ) => callBegan({
    url : '/rutine_excersise/' + id + "/",
    onSuccess : 'excersise/removeExcersise',
    method : 'delete',
    onError : callFailed.type,
    onBegin : 'excersise/startRequest',
    payload: {id : id}
})

export const reorderExcersise = (id : number, order : number ) => callBegan({
    url : '/rutine_excersise/' + id + "/",
    onBegin : 'excersise/reorderExcersise',
    method : 'patch',
    data : {id : id, order : order},
    payload : {id : id, order : order},
    onError : callFailed.type,
})

export const patchRutineExcersise = (todo : any ) => callBegan({
    url : '/rutine_excersise/' + todo.id + "/",
    onSuccess : 'excersise/modifyExcersise',
    method : 'patch',
    data : todo,
    onError : callFailed.type,
})

export const name =  rutineExcersise.name;
export default rutineExcersise.reducer;