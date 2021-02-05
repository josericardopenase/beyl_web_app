import React, { useEffect } from 'react'
import Message from './ChatMessages/Message'

export default function ChatMessages() {



    return (
        <div id='div' className="w-100 d-flex flex-column" style={{overflow: "auto", flexFlow: "column nowrap", flexDirection: "column-reverse"}}>
            <Message main={true} message={"Hello world"} time="12:00"></Message>
            <Message main={false} message={"Hello world"} time="12:00"></Message>
                    <Message main={true} message={"Hello world"} time="12:00"></Message>
            <Message main={false} message={"Hello world"} time="12:00"></Message>           <Message main={true} message={"Hello world"} time="12:00"></Message>
            <Message main={false} message={"Hello world"} time="12:00"></Message>           <Message main={true} message={"Hello world"} time="12:00"></Message>
            <Message main={false} message={"Hello world"} time="12:00"></Message>           <Message main={true} message={"Hello world"} time="12:00"></Message>
            <Message main={false} message={"Hello world"} time="12:00"></Message>           <Message main={true} message={"Hello world"} time="12:00"></Message>
            <Message main={false} message={"Hello world"} time="12:00"></Message>           <Message main={true} message={"Hello world"} time="12:00"></Message>
            <Message main={false} message={"Hello world"} time="12:00"></Message>           <Message main={true} message={"Hello world"} time="12:00"></Message>
            <Message main={false} message={"Hello world"} time="12:00"></Message>           <Message main={true} message={"Hello world"} time="12:00"></Message>
            <Message main={false} message={"Hello world"} time="12:00"></Message>           <Message main={true} message={"Hello world"} time="12:00"></Message>
            <Message main={false} message={"Hello world adlk dasf ;lkasdjf asd fa;skdjf asdlf asd;f sadf ;asdf "} time="12:00"></Message>
        </div>
    )
}
