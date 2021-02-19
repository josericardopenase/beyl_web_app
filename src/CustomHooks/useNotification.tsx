import { useDispatch, useSelector, useStore } from "react-redux"
import React, {useState, useEffect} from 'react'
import { addNotification, shiftNotification } from "../Store/notifications"

interface notification{
    message : string,
    type : 
    "danger" |
    "information" |
    "error" |
    "success"
}


export default function useNotification(){

    const dispatch = useDispatch<any>()
    const store = useStore()
    const notificationTime : number = 4000;
    let many : number = 0

    const pushNotification = (notification : notification) => {

        many++;

        setTimeout(() => {
        
            dispatch(addNotification(notification));

            setTimeout(() => {

                dispatch(shiftNotification({}))

            }, notificationTime)
        
        }, notificationTime * (many - 1) + 600 * many)

    }

    return { pushNotification }

}
