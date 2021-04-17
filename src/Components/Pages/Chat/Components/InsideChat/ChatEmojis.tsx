import React, { useContext, useState } from 'react'
import { Icon } from '../../../../General/Constants/Icons/Icon'
import { FaRegGrinBeam} from 'react-icons/fa'
import ThemeContext from '../../../../../Store/Themes/ThemeContext'
import EmojiPicker from './EmojiPicker/EmojiPicker'
import useVisible from '../../../../../CustomHooks/useVisible'
import { AnimatePresence } from 'framer-motion'

interface IProps{
    addEmoji : any
}

export default function ChatEmojis({addEmoji} : IProps) {

    const theme = useContext(ThemeContext)
    const {isVisible, setIsVisible, ref, closeRef} = useVisible(false);
    
    const styles : React.CSSProperties = {

        padding: "0.5rem",
        width: "fit-content",
        borderRadius: "50%",
        marginRight: 8,
        position: "relative"

    }

    return (

        <div style={{width: "100%", display: "flex", justifyContent: "center", position: "relative", cursor: "pointer"}} ref={ref}>


            { isVisible ? <EmojiPicker onEmojiPick={addEmoji} ></EmojiPicker>  : null}

            <div style={styles} onClick={() => setIsVisible(!isVisible)} ref={closeRef}>
                <Icon>
                    <FaRegGrinBeam/>
                </Icon> 

            </div>
        </div>

    )
}


