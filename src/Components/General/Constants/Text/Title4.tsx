import React, { Props } from 'react'
import TextInterfaces from './Interfaces/TextInterfaces'
import { ConstantTextBase } from './ConstantTextBase'

export const Title4 = ({children, style,  fontWeight, color} : TextInterfaces.IText) => {
    
    const FontSize = "0.88888rem";

    return (
        <ConstantTextBase color={color} style={style}  >

            <h4 style={{fontSize: FontSize,  fontWeight: fontWeight ? fontWeight : "normal",  margin: 0, wordBreak: "break-word", lineHeight: 1.4 } as React.CSSProperties}>
                {
                    children
                }
            </h4>

        </ConstantTextBase>
    )
}

