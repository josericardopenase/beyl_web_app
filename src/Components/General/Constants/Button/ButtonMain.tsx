import React from 'react'
import { Button } from 'react-bootstrap'
import Themes from '../../Styles/Themes'

export default function ButtonMain(props : any) {

    const styles= 
    {
        color: "white", 
        borderRadius: 12, ...props.style, 
        fontFamily : "Poppins", 
        fontWeight : 600, 
        backgroundColor: Themes.beylColor, 
        padding: 12,
        cursor: "pointer"
    } as React.CSSProperties


    return  (
        <div {...props} style={{...styles, ...props.style}} >
            { props.children }
        </div> 
    )
    
}
