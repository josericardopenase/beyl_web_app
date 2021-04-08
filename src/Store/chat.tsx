
import {createSlice} from '@reduxjs/toolkit'
import * as types from '../Types/Types'
import { callBegan, callFailed } from './apiActions';
import { PriorityQueue } from 'typescript-collections'
import { OrderedSet } from 'immutable'

interface IMessage{
    author : number,
    to: number,
    content : string,
    created : Date,
    modified : Date,
    attached_file : string | null
}

const message = createSlice({
    name : "chat",
    initialState : {
        loading : true,
        list: [],
    },

    reducers : {
        addMessage: (state : any, action : any) => {
            //add Athlete
            state.list.push(action.payload)
        }
    }
});



export const name = message.name
export const {addMessage} = message.actions
export default message.reducer