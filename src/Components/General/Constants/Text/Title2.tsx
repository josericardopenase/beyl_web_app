import React, { Props } from 'react'
import TextInterfaces from './Interfaces/TextInterfaces'
import { ConstantTextBase } from './ConstantTextBase'

export const Title2 = ({children, style,  fontWeight , color} : TextInterfaces.IText) => {
    
    const FontSize = 28;

    return (
        <ConstantTextBase color={color}  style={style}  >

            <h2 style={{fontSize: FontSize,  fontWeight: fontWeight ? fontWeight : "normal",  margin: 0} as React.CSSProperties}>
                {
                    children
                }
            </h2>

        </ConstantTextBase>
    )
}

