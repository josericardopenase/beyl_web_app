import React from 'react'
import { FaBug } from 'react-icons/fa'
import { Title4 } from './Title4'


interface IProps{
    children : any
    style ?: any
}

export default function TitleError({children, style} : IProps) {
    return (
            
                children ? 
            <Title4 color="#e82727" style={{marginTop: 10, ...style}}><FaBug></FaBug> {children}</Title4>
            :null
            
        )
}
