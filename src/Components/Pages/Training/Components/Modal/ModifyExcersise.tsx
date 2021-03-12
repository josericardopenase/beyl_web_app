import { Formik } from 'formik'
import React from 'react';
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import useThemes from '../../../../../CustomHooks/useThemes'
import { patchRutineExcersise } from '../../../../../Store/Rutines/rutineExcersise'
import { DietFood, RutineExcersise } from '../../../../../Types/Types'
import Bottom1 from '../../../../General/Constants/Button/Button1'
import VerticallyCenteredModal from '../../../../General/Constants/Modals/VerticallyCenteredModal'
import FormikInput from '../../../../General/Constants/Text/Inputs/FormikInput'
import FormikTextArea from '../../../../General/Constants/Text/Inputs/FormikTextArea'
import Input from '../../../../General/Constants/Text/Inputs/Input'
import TextArea from '../../../../General/Constants/Text/Inputs/TextArea'
import TitleInput from '../../../../General/Constants/Text/interactable/TitleInput'
import { Title3 } from '../../../../General/Constants/Text/Title3'
import { Title4 } from '../../../../General/Constants/Text/Title4'
import Themes from '../../../../General/Styles/Themes';
import Modify from './Modify'

interface props{
    excersise :  any,
    show : any,
    onHide : any
}

export default function ModifyExcersise({excersise, show, onHide} : props) {

    const theme = useThemes()
    const dispatch = useDispatch();


    function saveChanges(data : any){
        console.log({id : excersise.id, ...data})
        dispatch(patchRutineExcersise({id : excersise.id, ...data}))
        onHide();
    }

    return (
        <Modify title={"Modificar ejercicio"} show={show} onHide={onHide}>

            <Formik onSubmit={(data) =>saveChanges(data)} initialValues={{series: excersise.series, anotation: excersise.anotation}}>
                {
                ({handleSubmit}) =>(
                    <>
                        <Title4 style={{marginTop: 0, marginBottom: 10}}>Series:</Title4>
                        <FormikTextArea name="series" defaultValue = {excersise.series} primary={true} className="w-100"></FormikTextArea>
                        <Title4 style={{marginTop: 10, marginBottom: 0}}>Anotación:</Title4>
                        <FormikTextArea name="anotation" defaultValue={excersise.anotation}></FormikTextArea>
                        <div className="d-flex justify-content-end mt-3">
                            <Button variant={"danger"} onClick={() => onHide()}>Cancelar</Button>
                            <Button style={{backgroundColor: Themes.beylColor, border: "0px", marginLeft: 10}} onClick={() => handleSubmit()}>Guardar</Button>
                        </div>
                    </>
                )
                }
            </Formik>

        </Modify>
    )
}
