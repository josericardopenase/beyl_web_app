
import {createSlice} from '@reduxjs/toolkit'
import * as types from '../Types/Types'
import { callBegan, callFailed } from './apiActions'
import { PriorityQueue } from 'typescript-collections'
import OrderedSet from './Utils/DataStructures/OrderedSet'
interface IMessage{
    author : number,
    to: number,
    content : string,
    created : string,
    modified : string,
    attached_file : string | null
}

const comparator = (a : IMessage, b : IMessage) : number => {
    
    const dateA = new Date(a.created)
    const dateB = new Date(b.created)

    return dateA.getTime() - dateB.getTime();
}

const equals = (a : IMessage, b : IMessage) : boolean => {
    if(
        a.author === b.author
        &&
        a.to === b.to
        &&
        a.content === b.content
        &&
        a.created === b.created
    ){
        return true
    }
    return false
}



const message = createSlice({
    name : "chat",
    initialState : {
        loading : true,
        list: [],
    },

    reducers : {
        addMessage: (state : any, action : any) => {

            state.loading = false;
            const ot = new OrderedSet<IMessage>(state.list, comparator, equals);
            ot.insert(action.payload)
            state.list = ot.array()

        },
        addMultipleMessages : (state : any, action : any) => {

            state.loading = false;
            const ot = new OrderedSet<IMessage>(state.list, comparator, equals);
            ot.insertMultiple(action.payload.results)
            state.list = ot.array()

        },
        chatRequest : (state : any, action : any) => {

            state.loading = true;

        }


    }
});

export const addMultipleMessages = (person : number, page ?: number) => callBegan( {
    url : `/chat/${person}/${page ? `?page=${page}` : ''}` ,
    onSuccess : 'chat/addMultipleMessages',
    onError : callFailed.type,
    onBegin : 'chat/generalHistoryRequest'
})



export const name = message.name
export const {addMessage} = message.actions
export default message.reducer