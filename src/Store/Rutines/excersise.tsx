import { createSlice } from '@reduxjs/toolkit'
import { callBegan, callFailed } from '../apiActions';
import reorder from '../Utils/reorder';

const excersise = createSlice({
    name: 'baseExcersise',
    initialState: {
        list: [],
        privateList : [],
        actualPage : undefined,
        next : undefined,
        prev : undefined,
        pages : undefined,
        loading: true,

    },
    reducers: {

        addMultipleExcersise: (state : any, action : any) => {
            state.loading = false;
            state.next = action.payload.next;
            state.prev = action.payload.previous;
            state.pages = Math.round(action.payload.count/action.payload.results.length)

            state.list = action.payload.results;


        },
        loadExcersisePage: (state : any, action : any) => {

            state.loading = false;
            state.next = action.payload.next;
            state.prev = action.payload.previous;
            state.pages = Math.round(action.payload.count/action.payload.results.length)
            state.loading = false;
            state.list.push(...action.payload.results);

        },
        addPrivateMultipleExcersise: (state : any, action : any) => {

            state.loading = false;
            state.next = action.payload.next;
            state.prev = action.payload.previous;
            state.pages = Math.round(action.payload.count/action.payload.results.length)
            state.loading = false;
            state.privateList = action.payload.results;
        },
        likeExcersise : (state : any, action : any) => {
            state.list = state.list.map((x: any) => x.id === parseInt(action.payload.id) ? {...x, is_favourite : !x.is_favourite} : x)
            state.privateList = state.privateList.map((x: any) => x.id === parseInt(action.payload.id) ? {...x, is_favourite : !x.is_favourite} : x)
        },
        addExcersise :  (state : any, action : any ) => {
            state.loaindg =  false;
            state.privateList.push(action.payload)
        },
        removeExcersise: (state : any, action : any) => {
            state.list.splice(state.list.findIndex((day : any) => action.payload.id === day.id), 1) 
            state.privateList.splice(state.privateList.findIndex((day : any) => action.payload.id === day.id), 1) 
        },
        retrieveExcersise : (state : any, action : any) => {
            const index = state.list.findIndex((day : any) => action.payload.id == day.id);
            state.list[index] = action.payload;
            const index2 = state.privateList.findIndex((day : any) => action.payload.id == day.id);
            state.privateList[index2] = action.payload;
        },
        excersiseRequest : (state : any, action : any) => {
            state.loading = true;
        },
        excersiseReceived : (state : any, action : any) => {
            state.loading = false;
        }
    }
});


export const getBaseExcersises = (text : string, tag : number[]) => callBegan({
    url : `/excersise/?page_size=10${text ? "&search=" + text : ""}${tag ? tag.map((x : number) => `&tags=${x}`).join('')  : ""}`,
    onSuccess : 'baseExcersise/addMultipleExcersise',
    onError : callFailed.type,
    onBegin : 'excersise/excersiseRequest'
})

export const likeExcersise = (id : string) => callBegan({
    url : `/excersise/${id}/like/`,
    method : 'post',
    onSuccess : 'baseExcersise/likeExcersise',
    onError : callFailed.type,
    onBegin : 'excersise/excersiseRequest'
})


export const addBaseExcersisesPage = (page: number, text :string, tag : number[]) => callBegan({
    url : `/excersise/?page=${page}${text ? "&search=" + text : ""}${tag ? tag.map((x : number) => `&tags=${x}`).join(''): ""}`,
    onSuccess : 'baseExcersise/loadExcersisePage',
    onError : callFailed.type,
    onBegin : 'excersise/excersiseRequest'
})

export const getBaseTrainerExcersise = (text : string, tag : number[]) => callBegan({
    url : `/excersise/?page_size=1000&public=False${text ? "&search=" + text : ""}${tag ? tag.map((x : number) => `&tags=${x}`).join('') : ""}`,
    onSuccess : 'baseExcersise/addPrivateMultipleExcersise',
    onError : callFailed.type,
    onBegin : 'Excersise/ExcersiseRequest'
})

export const deleteBaseExcersise = (id : number ) => callBegan({
    url : '/excersise/' + id + "/",
    method : 'delete',
    onSuccess : 'baseExcersise/removeExcersise',
    onError : callFailed.type,
    onBegin : 'excersise/ExcersiseRequest',
    payload: {id : id}
})


export const patchBaseExcersise = (todo : any ) => callBegan({
    url : '/excersise/' + todo.id + "/",
    onSuccess : 'baseExcersise/retrieveExcersise',
    method : 'patch',
    data : todo,
    onError : callFailed.type,
})

export const postBaseExcersise = (todo : any ) => callBegan({
    url : '/excersise/',
    onSuccess : 'baseExcersise/addExcersise',
    method : 'post',
    data : todo,
    onError : callFailed.type,
})

export const name =  excersise.name;
export default excersise.reducer;