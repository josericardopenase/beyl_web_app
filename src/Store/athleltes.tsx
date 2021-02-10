import {createSlice} from '@reduxjs/toolkit'
import * as types from '../Types/Types'
import { callBegan, callFailed } from './apiActions';


const athletes = createSlice({
    name : "athletes",
    initialState : {
        loading : true,
        list: [
        ],
        selectedAthlete : undefined

    },

    reducers : {
        addAthlete: (state : any, action : any) => {
            //add Athlete
            state.list.push(action.payload)
        },
        removeAthlete: (state : any, action : any) => {
            //remove Athl    
            state.list.splice(state.list.findIndex((athlete : any) => action.payload.id === athlete.id), 1) 
        },
        athletesReceived : (state : any, action : any) => {
            state.loading = false;
            state.list = action.payload;

        },
        athleteRequest : (state : any, action : any) => {
            state.loading = true;
        },
        setSelectedAthlete : (state : any, action : any) => {
            state.selectedAthlete = action.payload; 
        }
    }
});


export const loadAthletes = callBegan({
    url : '/my_athletes/',
    onSuccess : 'athletes/athletesReceived',
    onError : callFailed.type,
    onBegin : 'athletes/athleteRequest'
})

export const deleteAthlete = (id : number) => callBegan({
    url : '/my_athletes/' + id + '/',
    onSuccess : 'athletes/removeAthlete',
    payload: {id : id},
    method: "delete",
    onError : callFailed.type,
    onBegin : 'athletes/athleteRequest'
})


export const name = athletes.name
export const {addAthlete, removeAthlete, athletesReceived, athleteRequest, setSelectedAthlete} = athletes.actions
export default athletes.reducer