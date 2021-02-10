import {createSlice} from '@reduxjs/toolkit'
import * as types from '../Types/Types'
import { callBegan, callFailed } from './apiActions';


const authentication = createSlice({
    name : "auth",
    initialState : {
        loading : true,
        user: null,
        token: null, 
        isLoggedIn : false,
    },

    reducers : {
        setToken: (state : any, action : any) => {
            state.token = action.payload.token
            setLocalToken(state.token);
            state.isLoggedIn = true
        },
        setProfile: (state : any, action : any) => {
            state.user = action.payload
        },
        logOut: (state: any, action: any) => {
            state.isLoggedIn = false
            state.user  = null
            state.token = null 
        },
        startRequest : (state : any, action : any) => {
            state.loading = true
        },
    }
});


export const authLogin = (email : string, password : string) => callBegan({
    url : '/login/trainers/',
    onSuccess : 'auth/setToken',
    data : {
        email : email,
        password : password
    },
    method: 'post',
    onError : callFailed.type,
    onBegin : 'auth/startRequest'
})

export const getProfile = () => callBegan({

    url : '/profile/trainer/',
    onSuccess : 'auth/setProfile',
    onError : callFailed.type,
    onBegin : 'auth/startRequest'

})


const key = "token";

const setLocalToken = (token : string) => {
    try{
        localStorage.setItem(key, token);
    }catch(error){
        console.log("Error storing token", error);
    }
}

const getLocalToken = () => {
    try{
        return  localStorage.getItem(key);
    }catch(error){
        console.log("Error storing token", error);
    }
}

const removeLocalToken = () => {
    try{
        return localStorage.removeItem(key);
    }catch(error){
        console.log("Error removing the auth token", error);
    }
}

export {setLocalToken, getLocalToken, removeLocalToken}
export const name = authentication.name
export const {setToken, logOut} = authentication.actions
export default authentication.reducer