import React, { useEffect, useState } from 'react'
import { Title2 } from '../../General/Constants/Text/Title2'
import ChatMessages from './Components/ChatMessages'
import ChatWrite from './Components/ChatWrite'

export default function Chat({match} : any) {


    const [chat, setChat] = useState<any[]>([])

    const userId = match.params.id;
    

    useEffect(() => {

    }, [])

    const sendMessage = (e : string) => {

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
