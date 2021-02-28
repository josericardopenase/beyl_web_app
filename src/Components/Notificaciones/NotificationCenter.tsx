import React, { useEffect } from 'react'
import { useSelector, useStore } from 'react-redux'
import NotificationComponent from './Components/NotificationComponent'
import useNotification from '../../CustomHooks/useNotification'
import { AnimatePresence } from 'framer-motion'
import VerticallyCenteredModal from '../General/Constants/Modals/VerticallyCenteredModal'
import PopUpCenter from './Components/PopUpCenter'

export default function NotificationCenter() {

    const notifications = useSelector((state : any) => state.notifications.queue[0])
    const not = useNotification()


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
