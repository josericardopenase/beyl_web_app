import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import useVisible from '../../../../../../CustomHooks/useVisible'
import { NotificationIcon } from './Components/NotificationIcon'
import { NotificationPopUp } from './Components/NotificationPopUp'



interface notification{
    badge ?: boolean
}

export const NotificationCenter = ({badge} : notification) => {

    const {ref, isVisible, setIsVisible, closeRef} = useVisible(false);


    useEffect(() => {

        console.log(isVisible);

    }, [isVisible])


    return (
            <div style={{position: "relative"}} >

                <AnimatePresence key="tradicional" exitBeforeEnter>

                    <NotificationIcon Ref={closeRef} badge={true} onClick={() => {setIsVisible(!isVisible) }} ></NotificationIcon>
                    { isVisible ? <NotificationPopUp Ref = {ref}></NotificationPopUp> : null}

                </AnimatePresence>

            </div>
    )

}
