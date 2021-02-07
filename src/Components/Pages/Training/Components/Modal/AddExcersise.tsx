import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import useThemes from '../../../../../CustomHooks/useThemes'
import VerticallyCenteredModal from '../../../../General/Constants/Modals/VerticallyCenteredModal'
import Input from '../../../../General/Constants/Text/Inputs/Input'
import Button1 from '../../../../General/Constants/Button/Button1'
import TextArea from '../../../../General/Constants/Text/Inputs/TextArea';
import MultipleModal from '../../../../General/Constants/Modals/MultipleModal';
import { Formik } from 'formik';
import useApiCallback from '../../../../../CustomHooks/useApiCallback';
import apiTraining from '../../../../../Api/apiTraining';
import { Title3 } from '../../../../General/Constants/Text/Title3';
import ContainerBox from '../../../../General/Containers/ContainerBox';
import { Bolder } from '../../../../General/Constants/Text/Bolder';
import SearchSelector from '../Common/SearchSelector';
import { useDispatch } from 'react-redux';
import { postRutineExcersise } from '../../../../../Store/Rutines/rutineExcersise';
import * as Yup from 'yup'
import TitleError from '../../../../General/Constants/Text/TitleError';
import RutineExcersiseSearch from '../Common/SearchComponents/RutineExcersiseSearch';

const validationSchema = Yup.object().shape({
    excersise: Yup.array().required().min(1),
    series : Yup.string().required(),
    anotation: Yup.string()

})

export default function AddExcersise(props: any) {

    const theme = useThemes();
    const [index, setIndex] = useState<number>(1);
    const dispatch = useDispatch();

    function postData(values : any) : void{
        dispatch(postRutineExcersise(values))
    }


    return (

        <Formik validationSchema={validationSchema} initialValues={{group : props.id, excersise: [] , series: "", anotation : ""}} onSubmit={(values, {resetForm}) =>  { console.log("hello"); postData(values); props.onHide(); resetForm();}}>
        {
        
            ({values, errors, touched, handleChange, handleSubmit, isSubmitting, handleBlur}) => (
                <MultipleModal {...props} onHide={() => props.onHide()}  title="Añadir ejercicio" onFinish={handleSubmit}>
                {

                    [
                    <div>
                    
                        <SearchSelector multiple={true} name={"excersise"}  
                        element={(obj : any) => <RutineExcersiseSearch obj ={obj}></RutineExcersiseSearch>}
                        apiFunction = {apiTraining.getExcersise}
                        ></SearchSelector>
                        { errors.excersise ? <TitleError>{errors.excersise}</TitleError> : null }
                    </div>
                    
                    ,

                    <>
                        <TextArea name = "series" onChange={handleChange} onBlur={handleBlur} 
                        placeholder = {"Series, repeticiones etc..."}></TextArea>
                        { errors.series ? <TitleError>{errors.series}</TitleError> : null }
                        <TextArea name={"anotation"} onChange={handleChange} onBlur={handleBlur} value={values.anotation} placeholder="Anotaciones"></TextArea>
                        { errors.anotation ? <TitleError>{errors.anotation}</TitleError> : null }
                    </>
                    ]
                }
                </MultipleModal>
            )
        }

        </Formik>
    )
}
