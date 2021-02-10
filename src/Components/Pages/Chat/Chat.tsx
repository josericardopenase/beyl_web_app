import React, { useEffect, useState } from 'react'
import { Title2 } from '../../General/Constants/Text/Title2'
import ChatMessages from './Components/ChatMessages'
import ChatWrite from './Components/ChatWrite'

export default function Chat({match} : any) {


    const [chat, setChat] = useState<any[]>([])

    const userId = match.params.id;

    let chatSocket = new WebSocket(
        `ws://authorization:827a9e27f9f29b1f1c1c9f61a49fac631bc9a0f0@192.168.0.14:9000/ws/chat/${userId}/`
    )

    console.log(userId)

    useEffect(() => {
        chatSocket = new WebSocket(
        `ws://authorization:827a9e27f9f29b1f1c1c9f61a49fac631bc9a0f0@192.168.0.14:9000/ws/chat/${userId}/`
    )


    }, [])

    

    useEffect(() => {
        chatSocket.onopen = function(e){
            console.log("connected")
        }

        chatSocket.onmessage = function(e){
            setChat([...chat, {main : true, message : JSON.parse(e.data).message}])
            console.log(JSON.parse(e.data))
        }

        chatSocket.onclose = function(e){
            console.error('Chat socket closed unexpectedly')
        }
    }, [])

    const sendMessage = (e : string) => {
        chatSocket.send(JSON.stringify({
            'message' : e,
            'command' : 'new_message',
        }))
    }

    useEffect(() => {
        const obj = document.getElementById('div');
        if(obj != null){
            obj.scrollTop = obj.scrollHeight;
        }



    }, [userId])

    

    
    return (
        <div className="d-flex flex-column justify-content-end" style={{height: "99vh", zIndex: 90}}>       
            <ChatMessages chat ={chat} ></ChatMessages>           
            <ChatWrite sendMessage = {sendMessage}></ChatWrite>
        </div>

    )
}
