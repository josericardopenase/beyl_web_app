import React from 'react'
import LogoBeyl from '../../../../MediaFiles/logobeyl.png'

export const BeylIcon = ({size, style} : any) => {

        return (
        
            <div style={style}>
                <img src={LogoBeyl} style= {{width: size}} alt = "Logo"/>
            </div>
        )

}
