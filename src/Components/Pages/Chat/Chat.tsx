import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { addMultipleMessages } from '../../../Store/chat'
import Loading from '../../General/Constants/Loading/Loading'
import { Title2 } from '../../General/Constants/Text/Title2'
import ChatMessages from './Components/ChatMessages'
import ChatWrite from './Components/ChatWrite'
import InfiniteScroll from 'react-infinite-scroller';

interface IProps{
    ws : WebSocket
}

export default function Chat({ws} : IProps) {

    const [chat, setChat] = useState<any[]>([])

    const match : any = useRouteMatch();
    const userId = match.params?.id;
    const dispatch = useDispatch(); 
    const scrollParent = useRef(null)

    const author = useSelector((state : any) => state.auth.user.user.id);
    const messages = useSelector((state : any) => state.chat.list.filter(
        (x : any) => 
            ((x.author == state.auth.user.user.id && x.to == userId) || (x.to == state.auth.user.user.id && x.author == userId))
        )
    );
    const loading = useSelector((state : any) => state.chat.loading)


    const scrollDown = () => {
        const obj = document.getElementById('div');
        if(obj != null){
            obj.scrollTop = obj.scrollHeight;
        }   

    }
    const loadMore = (page : number) =>{
        dispatch(addMultipleMessages(userId, page));
    }

    const sendMessage = (e : string, attached_file : string) => {
        if(e === "")
            return;

        if(attached_file){
            ws.send(JSON.stringify({
                to: userId,
                message : e,
                command : "new_message",
                attached_file :  attached_file
            }))
            
        }else{
            ws.send(JSON.stringify({
                to: userId,
                message : e,
                command : "new_message"
            }))

        }

        scrollDown()
    }


    useEffect(() => {

        dispatch(addMultipleMessages(userId));
        scrollDown();


    }, [userId])

    

    
    return (
        <div className="d-flex flex-column justify-content-end" style={{height: "99vh", zIndex: 90}} ref = {scrollParent}>       
            <ChatMessages chat ={messages} ></ChatMessages>           
            <ChatWrite sendMessage = {sendMessage}></ChatWrite>
        </div>

    )
}
