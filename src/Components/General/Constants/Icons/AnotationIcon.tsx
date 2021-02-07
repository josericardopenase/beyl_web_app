import React, { useState } from 'react'
import { Button, OverlayTrigger, Popover } from 'react-bootstrap'
import { FaStickyNote, FaTrashAlt } from 'react-icons/fa'
import useThemes from '../../../../CustomHooks/useThemes'
import { Bolder } from '../Text/Bolder'
import TextArea from '../Text/Inputs/TextArea'
import Button1 from '../Button/Button1'
import { Title3 } from '../Text/Title3'
import { Icon } from './Icon'
import useVisible from '../../../../CustomHooks/useVisible'


interface IProps{
    obj: any,
    modifyMethod ?: any
}

export default function AnotationIcon({obj, modifyMethod} : IProps) {

    const themes = useThemes();
    const {ref, isVisible, setIsVisible} = useVisible(false);
    const [text, setText] = useState(obj.anotation);
    

    function modify(){

        
        console.log(text);

        if(text !== obj.anotation)
          modifyMethod(text);

        setIsVisible(false);

    }

    return (

        <OverlayTrigger trigger="click" placement="right" show={isVisible} overlay={
          <Popover id="popover-positionet-right" style={{borderRadius: 10, backgroundColor: themes.colors.secondary, outline: 0, border: 0}}
        >
                <div className="p-3" ref={ref}>
                    <Title3><Bolder>Anotacion</Bolder></Title3>
                    <TextArea placeholder={"Escribe tus indicaciones para realizar el ejercicio..."} value={text} onChange={(a : any) => setText(a.target.value)} style={{backgroundColor: themes.colors.primary, border : 0, borderRadius: 10, width: "15rem", height: "6rem", color : themes.colors.textPrimary, outline: 0, padding: "0.5rem", fontSize: 16}}>

                    </TextArea>
                    <Button1 style={{marginTop: 5, color : "white"}} onClick={modify}>
                        Save
                    </Button1>

                </div>
            </Popover>
        }>
            <Button style={{backgroundColor: "transparent", border : 0, padding: 0, margin : 0, outline: 0 }} onClick={() => setIsVisible(true)}>
                <Icon>
                    <FaStickyNote></FaStickyNote>
                </Icon>
            </Button>
        </OverlayTrigger>

    )
}
