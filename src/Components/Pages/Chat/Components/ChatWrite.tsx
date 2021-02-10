import React, { useContext, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ThemeContext from '../../../../Store/Themes/ThemeContext'
import ChatClip from './InsideChat/ChatClip'
import ChatEmojis from './InsideChat/ChatEmojis'
import ChatInput from './InsideChat/ChatInput'
import ChatSend from './InsideChat/ChatSend'



export default function ChatWrite({sendMessage} : any) {
    
    const theme = useContext(ThemeContext);
    const [text, setText] = useState("");


    const styles : React.CSSProperties = {
        padding: "10px", backgroundColor: theme.colors.secondary,
        borderRadius: "30px",
        width: "98%",
        alignItems: "center"
    }; 

    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center", zIndex: 900}}>

            <div style={styles}>


                    <div className="d-flex align-items-center">
                        <div className="d-flex">
                            <ChatEmojis></ChatEmojis>
                            <ChatClip></ChatClip>
                        </div>

                        <ChatInput onChange={setText}></ChatInput>

                        <div onClick={() => sendMessage(text)}>
                            <ChatSend></ChatSend>
                        </div>
                    </div>


            </div>

        </div>
    )
}
