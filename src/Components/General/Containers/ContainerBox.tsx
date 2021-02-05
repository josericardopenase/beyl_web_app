import React, { useContext } from 'react'
import ThemeContext from '../../../Store/Themes/ThemeContext'

interface IProps{
    children: any,
    color ?: string
}

export default function ContainerBox({children, color} : IProps) {

    const themes = useContext(ThemeContext);

    const style : React.CSSProperties = {
        backgroundColor: color === "primary" || color === "secondary" || color === undefined ?  color === "primary" ? themes.colors.primary : themes.colors.secondary : color,
        padding: 10,
        borderRadius: "20px",
        wordBreak: "break-word",

    }

    return (
        <div style={style}>
            {
                children
            }
        </div>
    )
}
