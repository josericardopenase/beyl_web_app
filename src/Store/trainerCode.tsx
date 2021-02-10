import {createSlice} from '@reduxjs/toolkit'
import * as types from '../Types/Types'
import { callBegan, callFailed } from './apiActions';


const trainerCode = createSlice({
    name : "trainerCode",
    initialState : {
        loading : true,
        list: [
        ],
        selectedAthlete : undefined

    },

    reducers : {
        addCode: (state : any, action : any) => {
            //add Athlete
            state.list.push({key : action.payload.code})
        },
        removeCode: (state : any, action : any) => {
            //remove Athl    
            state.list.splice(state.list.findIndex((athlete : any) => action.payload.key === athlete.key), 1) 
        },
        codeReceived : (state : any, action : any) => {
            state.loading = false;
            state.list = action.payload;

        },
        codeRequest : (state : any, action : any) => {
            state.loading = true;
        },
        setSelectedCode : (state : any, action : any) => {
            state.selectedAthlete = action.payload; 
        }
    }
});

export const getAllCode = () => callBegan({
    url : '/invitation_code/',
    onSuccess : 'trainerCode/codeReceived',
    onError : callFailed.type,
    onBegin : 'trainerCode/codeRequest'
})

export const getNewCode = () => callBegan({
    url : '/invitation_code/',
    onSuccess : 'trainerCode/addCode',
    method: "POST",
    onError : callFailed.type,
    onBegin : 'trainerCode/codeRequest'
})

export const deleteCode = (code : string) => callBegan({
    url : '/invitation_code/' + code + '/',
    onSuccess : 'trainerCode/removeCode',
    method: "delete",
    onError : callFailed.type,
    onBegin : 'trainerCode/codeRequest'
})


export const name = trainerCode.name
export default trainerCode.reducer