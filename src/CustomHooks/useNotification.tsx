import { useDispatch, useSelector, useStore } from "react-redux"
import React, {useState, useEffect} from 'react'
import * as nt from "../Store/notifications"

export interface notification{
    message : string,
    type : 
    "danger" |
    "information" |
    "error" |
    "success"
}

export interface popUp{
    image ?: any,
    title ?: any,
    body ?: any,
    size ?: string,
    upperTitle ?: any
}


export default function useNotification(){

    const dispatch = useDispatch<any>()
    const store = useStore()
    const notificationTime : number = 4000;
    let many : number = 0

    const pushNotification = (notification : notification) => {

        dispatch(nt.pushNotification(notification));

    }

    const addPopUp = (popUp  : popUp ) => {

        dispatch(nt.showPopUp(popUp))

    }

    const closePopUp = (popUp  : popUp ) => {

        dispatch(nt.closePopUp())

    }

    return { pushNotification, addPopUp, closePopUp }

}
