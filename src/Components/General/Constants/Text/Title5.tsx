import React, { Props } from 'react'
import TextInterfaces from './Interfaces/TextInterfaces'
import { ConstantTextBase } from './ConstantTextBase'

export const Title5 = ({children, style,  fontWeight, color} : TextInterfaces.IText) => {
    
    const FontSize = 11;

    return (
        <ConstantTextBase color={color} style={style}  >

            <h5 style={{fontSize: FontSize,  fontWeight: fontWeight ? fontWeight : "normal",  margin: 0, wordBreak: "break-word"} as React.CSSProperties}>
                {
                    children
                }
            </h5>

        </ConstantTextBase>
    )
}

