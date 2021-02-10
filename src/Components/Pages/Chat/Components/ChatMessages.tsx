import React, { useEffect } from 'react'
import Message from './ChatMessages/Message'

export default function ChatMessages({chat} : any) {



    return (
        <div id='div' className="w-100 d-flex flex-column" style={{overflow: "auto", flexFlow: "column nowrap", flexDirection: "column-reverse"}}>

            {
                chat.map((x : any) => ( 
                    <Message main={x.main} message={x.message} time="12:00"></Message>
                )
            )
            }
        </div>
    )
}
