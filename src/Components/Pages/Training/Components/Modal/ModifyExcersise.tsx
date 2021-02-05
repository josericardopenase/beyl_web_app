import React from 'react'
import { Button } from 'react-bootstrap'
import useThemes from '../../../../../CustomHooks/useThemes'
import { DietFood, RutineExcersise } from '../../../../../Types/Types'
import Bottom1 from '../../../../General/Constants/Button/Button1'
import VerticallyCenteredModal from '../../../../General/Constants/Modals/VerticallyCenteredModal'
import Input from '../../../../General/Constants/Text/Inputs/Input'
import TextArea from '../../../../General/Constants/Text/Inputs/TextArea'
import TitleInput from '../../../../General/Constants/Text/interactable/TitleInput'
import { Title3 } from '../../../../General/Constants/Text/Title3'
import { Title4 } from '../../../../General/Constants/Text/Title4'
import Modify from './Modify'

interface props{
    excersise :  RutineExcersise,
    show : any,
    onHide : any
}

export default function ModifyExcersise({excersise, show, onHide} : props) {

    const theme = useThemes()

    return (
        <Modify title={"Modificar ejercicio"} show={show} onHide={onHide}>

            <Title4 style={{marginTop: 0, marginBottom: 10}}>Series:</Title4>
            <Input defaultValue = {"12-10-8-5"} primary={true} className="w-100"></Input>
            <Title4 style={{marginTop: 10, marginBottom: 0}}>Anotación:</Title4>
            <TextArea defaultValue="Hazlo fuerte para que duela"></TextArea>
        </Modify>
    )
}
