import React from 'react'
import { FaBug } from 'react-icons/fa'
import { Title4 } from './Title4'


interface IProps{
    children : any
}

export default function TitleError({children} : IProps) {
    return (
        <Title4 color="#e82727" style={{marginTop: 10}}><FaBug></FaBug> {children}</Title4>
        )
}
