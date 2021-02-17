import React, { useContext } from 'react'
import ThemeContext from '../../../Store/Themes/ThemeContext'

interface IProps{
    children: any,
    color ?: string
    style ?: React.CSSProperties
}

export default function ContainerBox({children, color, style} : IProps) {

    const themes = useContext(ThemeContext);

    const inStyle : React.CSSProperties = {
        backgroundColor: color === "primary" || color === "secondary" || color === undefined ?  color === "primary" ? themes.colors.primary : themes.colors.secondary : color,
        padding: 10,
        borderRadius: "20px",
        wordBreak: "break-word",

    }

    return (
        <div style={{...inStyle, ...style}}>
            {
                children
            }
        </div>
    )
}
