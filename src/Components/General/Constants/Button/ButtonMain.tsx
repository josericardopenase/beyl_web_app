import React from 'react'
import { Button } from 'react-bootstrap'
import Themes from '../../Styles/Themes'

export default function ButtonMain(props : any) {
    return  (
        <div {...props} style={{color: "white", borderRadius: 12, ...props.style, fontFamily : "Poppins", fontWeight : 600, backgroundColor: Themes.beylColor, padding: 12}} >
            { props.children }
        </div> 
    )
    
}
