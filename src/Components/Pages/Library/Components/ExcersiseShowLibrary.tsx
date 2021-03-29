import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { FaEdit, FaFeather, FaFeatherAlt, FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import useThemes from '../../../../CustomHooks/useThemes'
import { Icon } from '../../../General/Constants/Icons/Icon';
import RemoveIcon from '../../../General/Constants/Icons/RemoveIcon';
import { Bolder } from '../../../General/Constants/Text/Bolder';
import { Title3 } from '../../../General/Constants/Text/Title3'
import ContainerBox from '../../../General/Containers/ContainerBox'
import ShowExcersisePopUp from '../../Training/Pages/Rutine/Components/ShowExcersisePopUp';
import {deleteBaseExcersise, likeExcersise, patchBaseExcersise} from '../../../../Store/Rutines/excersise'
import { AnimatePresence, motion } from 'framer-motion';
import { Formik } from 'formik';
import FormikInput from '../../../General/Constants/Text/Inputs/FormikInput';
import FormikInputPuntuation from '../../../General/Constants/Text/Inputs/FormikInputPuntuation';
import FormikTextArea from '../../../General/Constants/Text/Inputs/FormikTextArea';
import TagList from '../../../General/Constants/TagLIst';
import FormikImageUpload from '../../../General/Constants/Text/Inputs/FormikImageUpload';
import ButtonMain from '../../../General/Constants/Button/ButtonMain';
import apiTraining from '../../../../Api/apiTraining';
import * as Yup from 'yup';
import VerticallyCenteredModal from '../../../General/Constants/Modals/VerticallyCenteredModal';
import Themes from '../../../General/Styles/Themes';
export function PatchExcersiseForm(props : any){


    const dispatch = useDispatch();
    const theme = useThemes();

    const [tags, setTags] = useState([])
    
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("El nombre es un campo requerido."),
        difficult : Yup.number().required().min(1, "Como mínimo la dificultad tiene que ser uno"),
        description: Yup.string(),
        muscles: Yup.string().required("Debes asignar los músculos del ejercicio"),
        tags : Yup.array()

    })

    return (
        <Formik validationSchema={validationSchema} onSubmit={(data : any) =>  { dispatch(patchBaseExcersise(data)); props.onHide(); }} initialValues={{id: props.initialValues.id, name : props.initialValues.name, difficult : props.initialValues.difficult, description: props.initialValues.description, muscles : props.initialValues.muscles, tags : props.initialValues.tags}}>
            {
                ({values, handleSubmit, setFieldValue}) => (
                    <>
                        <Title3><Bolder>Nombre</Bolder></Title3>
                        <FormikInput value={values.name} placeholder="Nombre..." style={{backgroundColor: theme.colors.secondary, marginTop: 10, width: "100%", padding: 8}} name="name"></FormikInput>
                        <Title3 style={{marginTop: 20}}><Bolder>Dificultad</Bolder></Title3>
                        <FormikInputPuntuation size={25} name="difficult"></FormikInputPuntuation>
                        <Title3 style={{marginTop: 20}}><Bolder>Músculos</Bolder></Title3>
                        <FormikInput value={values.muscles} placeholder="Musculos..." style={{backgroundColor: theme.colors.secondary, marginTop: 10, width: "100%", padding: 8}} name="muscles"></FormikInput>
                        <Title3 style={{marginTop: 20}}><Bolder>Despripción</Bolder></Title3>
                        <FormikTextArea value={values.description} placeholder="Descripción..." style={{backgroundColor: theme.colors.secondary, border: 0, borderRadius: 5, marginTop: 10, width: "100%", padding: 8, color: theme.colors.textPrimary}} name="description"></FormikTextArea>
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
export default function ExcersiseShowLibrary({obj} : any) {

    const theme = useThemes();
    const [show, setShow] = useState(false);
    const [over, setOver] = useState(false)
    const [modify, setModify] = useState(false)
    const dispatch = useDispatch()

    const styles : React.CSSProperties = {

        backgroundColor: theme.colors.secondary, 
        border: `7px solid ${theme.colors.primary}`, 
        background : "",
        borderRadius: 25,
        minHeight: 200,
        backgroundImage: `    
        linear-gradient(
        rgba(0, 0, 0, 0.75), 
        rgba(0, 0, 0, 0.75)
        ), url(${obj.image}) `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }

    return (
        <>
        <motion.div  
            whileHover={{ scale: 1.03 }}
        onMouseEnter={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
        onMouseOver={() => setOver(true)}
        style={styles} className="col-lg-4 col-xl-3 col-md-12 d-flex align-items-center justify-content-stretch position-relative ">
            <div onClick={() => setShow(true)} className="w-100 h-100 d-flex align-items-center text-center justify-content-center">

                <Title3 color="white"><Bolder>{obj.name}</Bolder></Title3>

            </div>

{/*             DIFFERENT ACTIONS */}

            <>
                {
                    obj.public ?
                    null:

                    over ?
                    <motion.div
                    key={obj.id + "lskd"}
                    initial={{x: 20, opacity: 0}}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{x: 20, opacity: 0}}
                    transition={{duration: 0.4}}
                     className="position-absolute p-3"  style={{top: 0, right: 0}}>
                        <RemoveIcon popUp color="white" onHide={() => setOver(false)} onClick={() => dispatch(deleteBaseExcersise(obj.id))}></RemoveIcon>
                        <div className="mt-3" onClick={() => setModify(true)}>
                            <Icon color="white">
                                <FaFeatherAlt></FaFeatherAlt>
                            </Icon>
                        </div>
                    </motion.div>
                    : null
                }

                <motion.div
                    whileHover={{ scale: 1.3,shadow: "-2px -1px 15px 7px rgba(0,0,0,0.5)" }}
                    whileTap={{ scale: 0.7 }}
                 className="position-absolute p-3" style={{bottom: 0, right: 0}} 

                    onClick={() => dispatch(likeExcersise(obj.id))}
                 >
                                <FaStar  color={obj.is_favourite ? Themes.beylColor : theme.colors.textSecondary}></FaStar>
                </motion.div>
                <motion.div

                 className="position-absolute p-3 d-flex" style={{bottom: 0, left: 0}}>
                    {
                        obj.tags_read.map((x : any) => <div className="mr-2" style={{width: 18, height: 18, border: `4px ${x.color_primary} solid`, borderRadius: "50%"}}></div>)
                    }
                </motion.div>
            </>
        </motion.div>
        <ShowExcersisePopUp show={show} setShow={setShow} obj={obj}></ShowExcersisePopUp>
        <VerticallyCenteredModal size="lg" show={modify} onHide={() => setModify(false)} title="Modificar comida" footer={<></>}>
            <PatchExcersiseForm initialValues={obj} onHide={() => setModify(false)}></PatchExcersiseForm>
        </VerticallyCenteredModal>
        </>
    )
}
