import {createSlice} from '@reduxjs/toolkit'
import * as types from '../Types/Types'
import { callBegan, callFailed } from './apiActions';
import { notification } from '../CustomHooks/useNotification'


const authentication = createSlice({
    name : "auth",
    initialState : {
        loading : false,
        user: null,
        token: null, 
        isLoggedIn : false,
        errors: null,
    },

    reducers : {
        setToken: (state : any, action : any) => {
            state.loading = false
            state.token = action.payload.token
            setLocalToken(state.token);
            state.isLoggedIn = true
        },
        setProfile: (state : any, action : any) => {
            state.loading = false
            state.user = action.payload
        },
        modifyProfile: (state : any, action : any) => {
            state.loading = false
            state.user.user = action.payload
        },
        logOut: (state: any, action: any) => {
            state.loading = false
            state.isLoggedIn = false
            state.user  = null
            state.token = null 
        },
        startRequest : (state : any, action : any) => {
            state.errors = null
            state.loading = true
        },
        finishRequest : (state : any, action : any) => {
            state.loading = false
        },
        setErrors : (state : any, action: any) => {
            state.loading = false
            state.errors = action.payload
        }
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
    onError : 'auth/setErrors',
    onBegin : 'auth/startRequest'
})

export const authRegister = (email : string, password : string, name : string, surname: string) => callBegan({
    url : '/register_trainer/',
    data : {
        email : email,
        password : password,
        name : name,
        surname: surname
    },
    method: 'post',
    onError : 'auth/setErrors',
    onBegin : 'auth/startRequest',
    onSuccess : 'auth/finishRequest'
})

export const getProfile = () => callBegan({

    url : '/profile/trainer/',
    onSuccess : 'auth/setProfile',
    onError : callFailed.type,
    onBegin : 'auth/startRequest'

})

const successNotification : notification = {
    type : "success",
    message: "Se ha modificado el perfil correctamente!"
}

const errorNotification : notification = {
    type : "error",
    message: "No se ha podido modificar el perfil"
}

export const modifyProfile = (data : any) => callBegan({

    url : '/profile/edit/',
    data: data,
    onSuccess : 'auth/modifyProfile',
    onError : 'auth/setErrors',
    onBegin : 'auth/startRequest',
    method: 'PUT',
    notifyOnSuccess: successNotification,
    notifyOnError: errorNotification


})

export const changePassword = (data : any) => callBegan({

    url : '/profile/change_password/',
    data: data,
    onSuccess : 'auth/finishRequest',
    onError : 'auth/setErrors',
    onBegin : 'auth/startRequest',
    method: 'PUT',
    notifyOnSuccess: successNotification,
    notifyOnError: errorNotification

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