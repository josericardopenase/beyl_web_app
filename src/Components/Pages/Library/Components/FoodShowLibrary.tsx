import { Formik } from 'formik';
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { FaFeatherAlt, FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import useThemes from '../../../../CustomHooks/useThemes'
import { deleteBaseFood, likeFood, patchBaseFood } from '../../../../Store/Diets/food';
import { Icon } from '../../../General/Constants/Icons/Icon';
import RemoveIcon from '../../../General/Constants/Icons/RemoveIcon';
import { Bolder } from '../../../General/Constants/Text/Bolder';
import { Title3 } from '../../../General/Constants/Text/Title3'
import ContainerBox from '../../../General/Containers/ContainerBox'
import FoodMacrosChart from '../../Training/Pages/Diet/Components/FoodMacrosChart';
import * as Yup from 'yup'
import FormikInput from '../../../General/Constants/Text/Inputs/FormikInput';
import ButtonMain from '../../../General/Constants/Button/ButtonMain';
import TagList from '../../../General/Constants/TagLIst';
import apiDiet from '../../../../Api/apiDiet';
import VerticallyCenteredModal from '../../../General/Constants/Modals/VerticallyCenteredModal';
import Themes from '../../../General/Styles/Themes';

 function ModifyFoodForm(props : any){

    const theme = useThemes();
    const dispatch = useDispatch();


    const validationSchema = Yup.object().shape({
        name: Yup.string().required(),
        protein : Yup.number().required().min(1),
        carbohydrates : Yup.number().required().min(1),
        fat : Yup.number().required().min(1),
        kcalories: Yup.number().required().min(1),
        tags : Yup.array()

    })

    return (
        <Formik validationSchema={validationSchema} onSubmit={(data : any) =>  { props.onHide(); dispatch(patchBaseFood(data)); }} initialValues={props.initialValues ? props.initialValues: {name : '', protein :  0, carbohydrates : 0, fat :  0, kcalories : 0, portion_weight: 100, tags : []}}>
            {
                ({values, handleSubmit, setFieldValue}) => (
                    <>

                        <Title3>Nombre</Title3>
                        <FormikInput value={values.name} placeholder="Nombre..." style={{backgroundColor: theme.colors.secondary, marginTop: 10, width: "100%", padding: 8,}} name="name"></FormikInput>

                        <Row className="mt-5 align-items-center">

                            <Col>
                            
                                <div className="w-100 mb-4 d-flex justify-content-between align-items-center">
                                    <Title3 color="primary" style={{paddingRight: 15}}><Bolder>Kcalories</Bolder></Title3>
                                    <div className="d-flex align-items-center">
                                        <FormikInput value={values.kcalories} name="kcalories" placeholder="kcalories" style={{maxWidth: 170, backgroundColor: theme.colors.secondary, marginRight: 33}}>
                                        </FormikInput>

                                    </div>

                                </div>

                                <div className="w-100 mb-4 d-flex justify-content-between align-items-center">
                                    <Title3 color="#FD413C" style={{paddingRight: 15}}><Bolder>Proteínas</Bolder></Title3>
                                    <div className="d-flex align-items-center">
                                        <FormikInput value={values.protein} name="protein" placeholder="gr de proteínas" style={{maxWidth: 170, backgroundColor: theme.colors.secondary, marginRight: 10}}>
                                        </FormikInput>
                                        <Title3>gr</Title3>
                                    </div>

                                </div>

                                <div className="w-100 mb-4 d-flex justify-content-between align-items-center">
                                    <Title3 color="#FFDD68" style={{paddingRight: 15}}><Bolder>Carbohídratos</Bolder></Title3>
                                    <div className="d-flex align-items-center">
                                        <FormikInput value={values.carbohydrates} name="carbohydrates" placeholder="gr de carbs" style={{maxWidth: 170, backgroundColor: theme.colors.secondary, marginRight: 10}}>
                                        </FormikInput>
                                        <Title3>gr</Title3>
                                    </div>

                                </div>
                            
                                <div className="w-100 mb-2 d-flex justify-content-between align-items-center">
                                    <Title3 color="#22A447" style={{paddingRight: 15}}><Bolder>Grasas</Bolder></Title3>
                                    <div className="d-flex align-items-center">
                                        <FormikInput value={values.fat}  name="fat" placeholder="gr de grasas" style={{maxWidth: 170, backgroundColor: theme.colors.secondary, marginRight: 10}}>
                                        </FormikInput>
                                        <Title3>gr</Title3>
                                    </div>

                                </div>

                            </Col>
                            <Col>
                            
                            
                                <FoodMacrosChart hasCalories showTooltip width={"100%"} height={200} actualWeight={100} food={{ food : {carbohydrates : values.carbohydrates, fat : values.fat, protein :  values.protein, kcalories: values.kcalories, portion_weight: 100}}}></FoodMacrosChart>
                                    
                            </Col>

                        </Row>
                        <Title3 style={{marginTop: 20, marginBottom: 15}}><Bolder>Categorías</Bolder></Title3>
                        <TagList tags={values.tags} setTags={(result : any) => { setFieldValue('tags', result) }} getTagsFunc={apiDiet.getFoodTags} ></TagList>
                        <div className="mt-5 d-flex justify-content-end">
                            <ButtonMain onClick={handleSubmit}>Modificar</ButtonMain>
                        </div>

                    </>
                )
            }
        </Formik>
    )
}

export default function FoodShowLibrary({obj} : any) {

    const theme = useThemes();
    const [over, setOver] = useState(false);
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);

    const styles : React.CSSProperties = {

        backgroundColor: theme.colors.secondary, 
        border: `7px solid ${theme.colors.primary}`, 
        borderRadius: 25,
        minHeight: 200,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }


    return (
        <>
            <Col 
            
            onMouseEnter={() => setOver(true)}
            onMouseLeave={() => setOver(false)}
            onMouseOver={() => setOver(true)}
            md={12} lg={4} xl={3} style={styles} className="d-flex align-items-center justify-content-center">
                    <FoodMacrosChart showTooltip width={100} height={100} innerRadius={20} outerRadius={30} actualWeight={obj.portion_weight} food={{ food :obj}}></FoodMacrosChart>
                    <Title3><Bolder>{obj.name}</Bolder></Title3>

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
                            <RemoveIcon popUp color="white" onHide={() => setOver(false)} onClick={() => dispatch(deleteBaseFood(obj.id))}></RemoveIcon>
                            <div className="mt-3" onClick={() => setShow(true)}>
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

                        onClick={() => dispatch(likeFood(obj.id))}
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
            </Col>

            <VerticallyCenteredModal size="lg" show={show} onHide={() => setShow(false)} title="Modificar alimento" footer={<></>}>
                <ModifyFoodForm initialValues={obj} onHide={() => setShow(false)}></ModifyFoodForm>
            </VerticallyCenteredModal>

        </>
    )
}
