import React, { Props } from 'react'

import { ConstantTextBase } from './ConstantTextBase'
import TextInterfaces from './Interfaces/TextInterfaces';


export const Paragraph = ({children, style, fontWeight, color} : TextInterfaces.IText) => {
    
    const FontSize = 12;

    return (
        <ConstantTextBase color={color}  style={style} >

            <p style={{fontSize: FontSize, fontWeight: fontWeight ? fontWeight : "normal"} as React.CSSProperties}>
                {
                    children
                }
            </p>

        </ConstantTextBase>
    )
}

