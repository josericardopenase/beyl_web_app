import React, { useContext } from 'react'
import ThemeContext from '../../../../../Store/Themes/ThemeContext'

export default function ChatInput() {

    const themes = useContext(ThemeContext)

    const style = {
        borderRadius: "20px",
        border: "0",
        padding: "9px 10px",
        width: "100%",
        backgroundColor: themes.colors.primary,
        color: themes.colors.textPrimary,
        flex: "1 1 auto",
        margin: "0px 10px"
    }

    return (
        <input style = {style} placeholder="Escribe un mensaje aqui"></input>
    )
}
