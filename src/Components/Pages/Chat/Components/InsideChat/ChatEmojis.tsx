import React, { useContext } from 'react'
import { Icon } from '../../../../General/Constants/Icons/Icon'
import { FaRegGrinBeam} from 'react-icons/fa'
import ThemeContext from '../../../../../Store/Themes/ThemeContext'

export default function ChatEmojis() {

    const theme = useContext(ThemeContext)
    
    const styles : React.CSSProperties = {
        backgroundColor: theme.colors.primary ,
        padding: "0.8rem",
        width: "fit-content",
        borderRadius: "50%",
        marginRight: 8

    }

    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <div style={styles}>
                <Icon>
                        <FaRegGrinBeam/>
                </Icon> 
            </div>
        </div>
    )
}


