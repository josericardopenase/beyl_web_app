import { Formik } from 'formik'
import { writevSync } from 'fs'
import React, { useEffect, useState } from 'react'
import useThemes from '../../../CustomHooks/useThemes'
import FormikInput from '../../General/Constants/Text/Inputs/FormikInput'
import FormikTextArea from '../../General/Constants/Text/Inputs/FormikTextArea'
import FormikInputPuntuation from '../../General/Constants/Text/Inputs/FormikInputPuntuation'
import { Title3 } from '../../General/Constants/Text/Title3'
import ExcersiseShowLibrary from './Components/ExcersiseShowLibrary'
import GeneralLibrary from './GeneralLibrary'
import { Bolder } from '../../General/Constants/Text/Bolder'
import { Col, Row } from 'react-bootstrap'
import FormikImageUpload from '../../General/Constants/Text/Inputs/FormikImageUpload'
import { useSelector, useDispatch } from 'react-redux'
import { getBaseTrainerExcersise, getBaseExcersises, addBaseExcersisesPage } from '../../../Store/Rutines/excersise'
import { postBaseExcersise } from '../../../Store/Rutines/excersise'
import Loading from '../../General/Constants/Loading/Loading'
import * as Yup from 'yup'
import ButtonMain from '../../General/Constants/Button/ButtonMain'
import apiTraining from '../../../Api/apiTraining'
import TagList from '../../General/Constants/TagLIst'



export function AddExcersiseForm(props : any){


    const dispatch = useDispatch();
    const theme = useThemes();

    const [tags, setTags] = useState([])
    
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("El nombre es un campo requerido."),
        image : Yup.string().typeError("Tienes que subir la imagen del ejercicio.").required("Tienes que subir la imagen del ejercicio."),
        difficult : Yup.number().required().min(1, "Como mínimo la dificultad tiene que ser uno"),
        description: Yup.string(),
        muscles: Yup.string().required("Debes asignar los músculos del ejercicio"),
        tags : Yup.array()

    })

    return (
        <Formik validationSchema={validationSchema} onSubmit={(data : any) =>  { dispatch(postBaseExcersise(data)); props.onHide(); }} initialValues={{name : "", image: null, difficult : 1, description: "", muscles : "", tags : []}}>
            {
                ({values, handleSubmit, setFieldValue}) => (
                    <>
                        <Title3><Bolder>Nombre</Bolder></Title3>
                        <FormikInput placeholder="Nombre..." style={{backgroundColor: theme.colors.secondary, marginTop: 10, width: "100%", padding: 8}} name="name"></FormikInput>
                        <Title3 style={{marginTop: 20}}><Bolder>Dificultad</Bolder></Title3>
                        <FormikInputPuntuation size={25} name="difficult"></FormikInputPuntuation>
                        <Title3 style={{marginTop: 20}}><Bolder>Músculos</Bolder></Title3>
                        <FormikInput placeholder="Musculos..." style={{backgroundColor: theme.colors.secondary, marginTop: 10, width: "100%", padding: 8}} name="muscles"></FormikInput>
                        <Title3 style={{marginTop: 20}}><Bolder>Despripción</Bolder></Title3>
                        <FormikTextArea placeholder="Descripción..." style={{backgroundColor: theme.colors.secondary, border: 0, borderRadius: 5, marginTop: 10, width: "100%", padding: 8, color: theme.colors.textPrimary}} name="description"></FormikTextArea>
                        <Title3 style={{marginTop: 20, marginBottom: 15}}><Bolder>Categorías</Bolder></Title3>
                        <TagList tags={values.tags} setTags={(result : any) => { setFieldValue('tags', result) }} getTagsFunc={apiTraining.getExcersiseTags} ></TagList>

                        <Row>
                            <Col>
                                <FormikImageUpload isVideo={true} name="video"></FormikImageUpload>
                            </Col>
                            <Col>
                                <FormikImageUpload isVideo={false} name="image"></FormikImageUpload>
                            </Col>
                        </Row>

                        <div className="mt-5 d-flex justify-content-end">
                            <ButtonMain onClick={handleSubmit}>Agregar</ButtonMain>
                        </div>
                    </>
                )
            }
        </Formik>

    )
}

export default function ExcersisesLibrary() {

    const [show, setShow] = useState(false);

    return (
        <div>



            <GeneralLibrary 
            name={"ejercicios"}
            redux={
                {
                    privateGetAction: getBaseTrainerExcersise,
                    publicGetAction : getBaseExcersises,
                    loadMore: addBaseExcersisesPage,
                    privateSelector: (state : any) =>  state.training.rutine.baseExcersise.privateList,
                    publicSelector : (state : any) =>  state.training.rutine.baseExcersise.list,
                    loading: (state : any) =>  state.training.rutine.baseExcersise.loading,
                    next : (state : any) =>  state.training.rutine.baseExcersise.next
                }
            }
            onClick={() => console.log("hello world")}
            Component={(obj : any) => <ExcersiseShowLibrary obj={obj}></ExcersiseShowLibrary>}
            modal={{title: "Añadir ejercicio", footer: <></>, children: <AddExcersiseForm onHide={() => setShow(false)}></AddExcersiseForm>, onHide: () => null, show: show}}
            show={show}
            getTags={apiTraining.getExcersiseTags}
            setShow={setShow}
            ></GeneralLibrary>
            
        </div>
    )
}
