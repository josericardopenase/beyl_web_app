import React, { Props } from 'react'
import TextInterfaces from './Interfaces/TextInterfaces'
import { ConstantTextBase } from './ConstantTextBase'



export const Title1 = ({children, style,  fontWeight, color} : TextInterfaces.IText) => {
    
    const FontSize = 40;

    return (
        <ConstantTextBase color={color}  style={style} >

            <h1 style={{fontSize: FontSize,  fontWeight: fontWeight ? fontWeight : "normal", margin: 0} as React.CSSProperties}>
                {
                    children
                }
            </h1>

        </ConstantTextBase>
    )
}

