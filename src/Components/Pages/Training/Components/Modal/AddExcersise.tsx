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
import FormikTextArea from '../../../../General/Constants/Text/Inputs/FormikTextArea';
import { Title2 } from '../../../../General/Constants/Text/Title2';

const validationSchema = [
    
 Yup.object().shape({
    excersise: Yup.array().required().min(1),

}),

 Yup.object().shape({
    excersise: Yup.array().required().min(1, "Tienes que añadir mínimo un ejercicio."),
    series : Yup.string().required("Es obligatorio especificar las series."),
    anotation: Yup.string()

})
]

export default function AddExcersise(props: any) {

    const theme = useThemes();
    const [selectedItems, setSelectedItems] = useState<any>([]);
    const [slide, setSlide] = useState<number>(0)
    const dispatch = useDispatch();

    function postData(values : any, resetForm : any) : void{
        dispatch(postRutineExcersise(values))
        props.onHide();
        resetForm();
        setSlide(0);
    }

    const onHide = (resetForm: any) => {
        props.onHide();
        resetForm();
        setSlide(0);
    }

    return (

        <Formik validationSchema={validationSchema[1]} initialValues={{group : props.id, excersise: [] , series: "", anotation : ""}} onSubmit={(values,  {resetForm}) =>  {postData(values, resetForm); }}>
        {
        
            ({values, errors, touched, handleChange, handleSubmit, isSubmitting, handleBlur, resetForm}) => (
                <>

                <MultipleModal setSlide={setSlide} slide={slide} canSlide={() => values.excersise.length >0 } errors={errors} {...props} onHide={() => onHide(resetForm)}  title="Añadir ejercicio" onFinish={handleSubmit}>
                {

                    [
                    <div>
                        <SearchSelector  multiple={true} name={"excersise"}  
                        element={(obj : any) => <RutineExcersiseSearch obj ={obj}></RutineExcersiseSearch>}
                        apiFunction = {apiTraining.getExcersise}
                        selectedItems={selectedItems}
                        setSelectedItems = {setSelectedItems}
                        maxSelectedItems = {3}

                        ></SearchSelector>
                        { errors.excersise ? <TitleError>{errors.excersise}</TitleError> : null }
                    </div>
                    
                    ,

                    <>
                        <FormikTextArea name = "series" placeholder = {"Series, repeticiones etc..."}></FormikTextArea>
                        <FormikTextArea name = "anotation" placeholder = {"Anotaciones"}></FormikTextArea>

                    </>
                    ]
                }
                </MultipleModal>
                </>
            )
        }

        </Formik>
    )
}
