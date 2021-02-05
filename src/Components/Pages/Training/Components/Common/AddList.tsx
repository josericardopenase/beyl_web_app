import React from 'react'
import DraggingComponent from '../../../../General/Constants/DragAndDrop/DraggingComponent'
import { Title3 } from '../../../../General/Constants/Text/Title3'
import { Title4 } from '../../../../General/Constants/Text/Title4'
import ContainerBox from '../../../../General/Containers/ContainerBox'

interface props{
    text: string,
    styleContainer ?: React.CSSProperties,
    styleText ?: React.CSSProperties,
    onClick ?: any
}

export const AddList = ({text, styleContainer, styleText, onClick} : props) => {


    
    return (
        <div style={{...styleContainer, cursor: "pointer" }} onClick ={onClick}>
            <ContainerBox color="secondary">
                <Title3 style={styleText} > 
                    + {text} 
                </Title3>
            </ContainerBox>
        </div>
    )
}
