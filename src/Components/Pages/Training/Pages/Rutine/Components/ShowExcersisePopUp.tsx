import React from 'react'
import useThemes from '../../../../../../CustomHooks/useThemes'
import VerticallyCenteredModal from '../../../../../General/Constants/Modals/VerticallyCenteredModal'
import { Bolder } from '../../../../../General/Constants/Text/Bolder'
import { Title2 } from '../../../../../General/Constants/Text/Title2'
import { Title3 } from '../../../../../General/Constants/Text/Title3'
import { Title4 } from '../../../../../General/Constants/Text/Title4'
import ExcersisePuntuation from './ExcersisePuntuation'

export default function ShowExcersisePopUp({show, obj, setShow} : any) {

    const theme = useThemes()

    return (
        <VerticallyCenteredModal show={show} size="lg" onHide={() => setShow(false)} footer={<></>} title="" >
            <div className="p-3">
                <Title2 style={{marginBottom: 30}}><Bolder>{obj.name}</Bolder></Title2>
                <video src={obj.video} controls style={{width: "100%", height: 400, backgroundColor: theme.colors.secondary, borderRadius: 15 }}></video>
                <Title3 style={{marginBottom: 15, marginTop: 15}}><Bolder>Músculos</Bolder></Title3>
                <Title4 style={{marginBottom: 15, marginTop: 15}} color="secondary" >{obj.muscles}</Title4>
                <Title3 style={{marginBottom: 15, marginTop: 15}}><Bolder>Dificultad</Bolder></Title3>
                <ExcersisePuntuation puntuation={obj.difficult} size={28}></ExcersisePuntuation>
            </div>
        </VerticallyCenteredModal>
    )
}
