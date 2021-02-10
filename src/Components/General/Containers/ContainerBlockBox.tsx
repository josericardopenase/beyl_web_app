import React, { Children } from 'react'
import { Bolder } from '../Constants/Text/Bolder'
import { Title2 } from '../Constants/Text/Title2'
import { Title3 } from '../Constants/Text/Title3'

interface props {
    title: string,
    children: any
}

export const ContainerBlockBox = ({title, children} : props) => {
    return (
        <div style={{marginTop: 20, marginBottom: 20}} className="pl-2 pr-2">

            <Title3 style={{marginBottom: 10}}><Bolder>{title}</Bolder></Title3>

            {children}
            
        </div>
    )
}
