
import React, { useState } from 'react'
import DraggingComponent from '../../../../General/Constants/DragAndDrop/DraggingComponent'
import { Title3 } from '../../../../General/Constants/Text/Title3'
import { Title4 } from '../../../../General/Constants/Text/Title4'
import ContainerBox from '../../../../General/Containers/ContainerBox'
import Themes from '../../../../General/Styles/Themes'

interface props{
    text: string,
    styleContainer ?: React.CSSProperties,
    styleText ?: React.CSSProperties,
    onClick ?: any
}

export const AddInputList = ({text, styleContainer, styleText, onClick} : props) => {


    const [hover, setHover] = useState(false)
    
    return (
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{...styleContainer, cursor: "pointer" }} onClick ={onClick}>
            <ContainerBox color="secondary">
                <Title4 style={styleText} color={hover ? Themes.beylColor : "primary"} > 
                    + {text} 
                </Title4>
            </ContainerBox>
        </div>
    )
}