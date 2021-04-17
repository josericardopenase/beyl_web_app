import React, { useContext } from 'react'
import { Icon } from '../../../../General/Constants/Icons/Icon'
import { FaPaperPlane} from 'react-icons/fa'
import ThemeContext from '../../../../../Store/Themes/ThemeContext'

export default function ChatSend() {

    const theme = useContext(ThemeContext)
    
    const styles : React.CSSProperties = {
        padding: "0.8rem",
        width: "fit-content",
        borderRadius: "50%",

    }

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div style={styles}>
                <Icon>
                        <FaPaperPlane></FaPaperPlane>
                </Icon> 
            </div>
        </div>
    )
}
