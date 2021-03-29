import React from 'react'
import useThemes from '../../../../../CustomHooks/useThemes'

export default function TextArea(props : any) {

    const theme = useThemes()

    const style= {
        borderRadius: 5,
        border: 0,
        padding: "4px 10px 4px 10px",
        outline: 0,
        backgroundColor: theme.colors.secondary,
        color: theme.colors.textPrimary,
        width: "100%",
    } as React.CSSProperties

    return (
        <textarea className = "mt-3"style={{...style, ...props.style}} {...props}></textarea>
    )
}
