import { createSlice } from '@reduxjs/toolkit'
import { callBegan, callFailed } from '../apiActions';
import reorder from '../Utils/reorder';

const food = createSlice({
    name: 'baseFood',
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

        addMultipleFood: (state : any, action : any) => {
            state.loading = false;
            state.next = action.payload.next;
            state.prev = action.payload.previous;
            state.pages = Math.round(action.payload.count/action.payload.results.length)

            state.list = action.payload.results;


        },
        loadFoodPage: (state : any, action : any) => {

            state.loading = false;
            state.next = action.payload.next;
            state.prev = action.payload.previous;
            state.pages = Math.round(action.payload.count/action.payload.results.length)
            state.loading = false;
            state.list.push(...action.payload.results);

        },
        addPrivateMultipleFood: (state : any, action : any) => {

            state.loading = false;
            state.next = action.payload.next;
            state.prev = action.payload.previous;
            state.pages = Math.round(action.payload.count/action.payload.results.length)
            state.loading = false;
            state.privateList = action.payload.results;
        },
        addFood :  (state : any, action : any ) => {
            state.loaindg =  false;
            state.privateList.push(action.payload)
        },
        removeFood: (state : any, action : any) => {
            state.list.splice(state.list.findIndex((day : any) => action.payload.id === day.id), 1) 
            state.privateList.splice(state.privateList.findIndex((day : any) => action.payload.id === day.id), 1) 
        },
        retrieveFood : (state : any, action : any) => {
            const index = state.list.findIndex((day : any) => action.payload.id === day.id);
            state.list[index] = action.payload;
            const index2 = state.privateList.findIndex((day : any) => action.payload.id === day.id);
            state.privateList[index2] = action.payload;
        },
        foodRequest : (state : any, action : any) => {
            state.loading = true;
        },
        foodReceived : (state : any, action : any) => {
            state.loading = false;
        },
        likeFood : (state : any, action : any) => {
            state.list = state.list.map((x: any) => x.id === parseInt(action.payload.id) ? {...x, is_favourite : !x.is_favourite} : x)
            state.privateList = state.privateList.map((x: any) => x.id === parseInt(action.payload.id) ? {...x, is_favourite : !x.is_favourite} : x)
        },
    }
});


export const getBaseFoods = (text : string, tag : number[]) => callBegan({
    url : `/food/?page_size=12${text ? "&search=" + text : ""}${tag ? tag.map((x : number) => `&tags=${x}`).join('')  : ""}`,
    onSuccess : 'baseFood/addMultipleFood',
    onError : callFailed.type,
    onBegin : 'food/foodRequest'
})

export const likeFood = (id : string) => callBegan({
    url : `/food/${id}/like/`,
    method : 'post',
    onSuccess : 'baseFood/likeFood',
    onError : callFailed.type,
    onBegin : 'excersise/excersiseRequest'
})

export const addBaseFoodsPage = (page: number, text :string, tag : number[]) => callBegan({
    url : `/food/?page=${page}${text ? "&search=" + text : ""}${tag ? tag.map((x : number) => `&tags=${x}`).join(''): ""}`,
    onSuccess : 'baseFood/loadFoodPage',
    onError : callFailed.type,
    onBegin : 'food/foodRequest'
})

export const getBaseTrainerFood = (text : string, tag : number[]) => callBegan({
    url : `/food/?page_size=1000&public=False${text ? "&search=" + text : ""}${tag ? tag.map((x : number) => `&tags=${x}`).join('') : ""}`,
    onSuccess : 'baseFood/addPrivateMultipleFood',
    onError : callFailed.type,
    onBegin : 'Food/FoodRequest'
})

export const deleteBaseFood = (id : number ) => callBegan({
    url : '/food/' + id + "/",
    method : 'delete',
    onSuccess : 'baseFood/removeFood',
    onError : callFailed.type,
    onBegin : 'food/FoodRequest',
    payload: {id : id}
})


export const patchBaseFood = (todo : any ) => callBegan({
    url : '/food/' + todo.id + "/",
    onSuccess : 'baseFood/retrieveFood',
    method : 'patch',
    data : todo,
    onError : callFailed.type,
})

export const postBaseFood = (todo : any ) => callBegan({
    url : '/food/',
    onSuccess : 'baseFood/addFood',
    method : 'post',
    data : todo,
    onError : callFailed.type,
})

export const name =  food.name;
export default food.reducer;