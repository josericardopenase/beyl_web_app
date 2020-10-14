import React, { Children } from 'react'
import { Title2 } from '../Constants/Text/Title2'

interface props {
    title: string,
    children: any
}

export const ContainerBlockBox = ({title, children} : props) => {
    return (
        <div style={{marginTop: 20, marginBottom: 20}}>

            <Title2 style={{marginBottom: 20}}>{title}</Title2>

            {children}
            
        </div>
    )
}
