import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import NotificationComponent from './Components/NotificationComponent'
import useNotification from '../../CustomHooks/useNotification'
import { AnimatePresence } from 'framer-motion'

export default function NotificationCenter() {

    const notifications = useSelector((state : any) => state.notifications.queue[0])

    return (
        <AnimatePresence  key="notifications" exitBeforeEnter>
           {
               notifications ?
                    <NotificationComponent id={notifications.id} {...notifications}></NotificationComponent>
                :

                null
           } 
        </AnimatePresence>
    )
}
