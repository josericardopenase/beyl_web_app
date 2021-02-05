import React from 'react'
import { Button } from 'react-bootstrap'

export default function Bottom1(props : any) {
    return  <Button {...props} variant="warning" style={{color: "white", borderRadius: 12, ...props.style, fontFamily : "Poppins", fontWeight : 600}} >{ props.children }</Button> 
    
}
