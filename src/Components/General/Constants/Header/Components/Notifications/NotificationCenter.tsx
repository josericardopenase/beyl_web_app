import React, { useEffect, useState } from 'react'
import useVisible from '../../../../../../CustomHooks/useVisible'
import { NotificationIcon } from './Components/NotificationIcon'
import { NotificationPopUp } from './Components/NotificationPopUp'



interface notification{
    badge ?: boolean
}

export const NotificationCenter = ({badge} : notification) => {

    const {ref, isVisible, setIsVisible} = useVisible(false);


    return (
        <div style={{position: "relative"}} onClick={() => setIsVisible(true)}>

            <NotificationIcon badge={true}></NotificationIcon>

            { isVisible == true ? <NotificationPopUp Ref = {ref}></NotificationPopUp> : null}

        </div>
    )
}
