import React, { useState } from 'react'
import { NotificationIcon } from './Components/NotificationIcon'
import { NotificationPopUp } from './Components/NotificationPopUp'



interface notification{
    badge ?: boolean
}

export const NotificationCenter = ({badge} : notification) => {

    const [open, setOpen] = useState(false)

    return (
        <div style={{position: "relative"}} onClick={() => setOpen(!open)}>

            <NotificationIcon badge={true}></NotificationIcon>

            { open ? <NotificationPopUp></NotificationPopUp> : null}

        </div>
    )
}
