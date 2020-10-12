import React, { Props } from 'react'
import TextInterfaces from './Interfaces/TextInterfaces'
import { ConstantTextBase } from './ConstantTextBase'

export const Title3 = ({children, style,  fontWeight, color} : TextInterfaces.IText) => {
    
    const FontSize = 20;

    return (
        
        <ConstantTextBase color={color} style={style} >

            <h3 style={{fontSize: FontSize,  fontWeight: fontWeight ? fontWeight : "normal",  margin: 0} as React.CSSProperties}>
                {
                    children
                }
            </h3>

        </ConstantTextBase>
    )
}

