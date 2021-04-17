import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Message from './ChatMessages/Message'

export default function ChatMessages({chat} : any) {

    console.log(chat)
    const userId = useSelector((state : any) => state.auth.user.user.id);

    return (
        <div id='div' className="w-100 d-flex flex-column" style={{overflow: "auto", flexFlow: "column nowrap", flexDirection: "column-reverse"}}>

            {
                chat.map((x : any) => ( 
                    <Message main={userId === x.author} message={x}></Message>
                )
            )
            }
        </div>
    )
}
