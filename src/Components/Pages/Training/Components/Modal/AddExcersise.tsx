import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { FaPlus, FaSearch } from 'react-icons/fa';
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
import { Title4 } from '../../../../General/Constants/Text/Title4';
import { Icon } from '../../../../General/Constants/Icons/Icon';

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

function VoidRutineExcersise({obj, series} : any){

    const theme = useThemes();

    return (
        <div style={{backgroundColor: theme.colors.secondary, padding: 10, borderRadius: 20}}>
            {
            obj.length === 1 ? 
            <Row className="align-items-stretch d-flex justify-content-stretch">

                <div className="col-4">
                <img  style={{borderRadius: "20px", objectFit: "cover", width: "100%", minHeight: "80px", }} src={obj[0].image} />
                </div>
                <div className="d-flex align-items-stretch col-8">
                    <div className="d-flex justify-content-between align-items-stretch w-100">
                        <div className="d-flex flex-column justify-content-center" style={{cursor: "pointer"}}>
                            <Title3 style={{marginBottom: "0.5rem", wordBreak: "break-word", whiteSpace: "break-spaces"}}><Bolder>{obj[0].name}</Bolder></Title3>
                            <Title4 color="secondary" style={{wordBreak: "break-word", whiteSpace: "break-spaces"}}>{series}</Title4>
                        </div>
                    </div>
                </div>
            </Row>

            :



                <>
                    <div className="d-flex align-items-stretch justify-content-between p-2">
                        <div className="d-flex flex-column justify-content-center" style={{cursor: "pointer"}} >
                            <Title3 style={{marginBottom: "0.5rem", wordBreak: "break-word", whiteSpace: "break-spaces"}}><Bolder>Superserie</Bolder></Title3>
                            <Title4 color="secondary" style={{wordBreak: "break-word", whiteSpace: "break-spaces"}}>{series}</Title4>
                        </div>
                    </div>
                    { obj.map((obj : any, i : number) => (

                            <div key={i}>
                                {
                                i !== 0 ?
                                <div className="w-100 justify-content-center d-flex">
                                    <Icon>
                                        <FaPlus></FaPlus>
                                    </Icon>
                                </div>
                                :
                                null
                                }
                                <Row className="align-items-center mt-2">

                                    <div className="col-4">
                                        <img  style={{borderRadius: "20px", objectFit: "cover", width: "100%", minHeight: "80px", }} src={obj.image} />
                                    </div>
                                    <div className="col-8">
                                        <Title3 style={{marginBottom: "0.5rem", wordBreak: "break-word", whiteSpace: "break-spaces"}}><Bolder>{obj.name}</Bolder></Title3>
                                    </div>
                                </Row>
                            </div>
                        )
                        )
                    }

                </>
                }
            </div>
    )

}

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
        setSelectedItems([]);
    }

    return (

        <Formik validationSchema={validationSchema[1]} initialValues={{group : props.id, excersise: [] , series: "", anotation : ""}} onSubmit={(values,  {resetForm}) =>  {postData(values, resetForm); }}>
        {
        
            ({values, errors, touched, handleChange, handleSubmit, isSubmitting, handleBlur, resetForm}) => (
                <>

                <MultipleModal resetForm={() =>{resetForm(); setSelectedItems([])}} setSlide={setSlide} slide={slide} canSlide={() => values.excersise.length >0 } errors={errors} {...props} onHide={() => onHide(resetForm)}  title="Añadir ejercicio" onFinish={handleSubmit}>
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
                        <Row>

                            <Col className="d-flex flex-column">
                                <Title3 style={{marginBottom: 0}}><Bolder>Series:</Bolder></Title3>
                                <FormikTextArea name = "series" placeholder = {"Series, repeticiones etc..."}></FormikTextArea>
                                <Title3 style={{marginBottom: 0, marginTop: 5}}><Bolder>Anotación:</Bolder></Title3>
                                <FormikTextArea name = "anotation" placeholder = {"Anotaciones"}></FormikTextArea>
                            </Col>
                            <Col lg={6}>

                                <Title3 style={{marginBottom: 15}}><Bolder>Resultado:</Bolder></Title3>
                               <VoidRutineExcersise obj={selectedItems} series={values.series}></VoidRutineExcersise> 

                            </Col>
                        </Row>

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
