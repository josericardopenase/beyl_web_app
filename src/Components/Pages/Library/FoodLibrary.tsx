import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import useThemes from '../../../CustomHooks/useThemes'
import { Bolder } from '../../General/Constants/Text/Bolder'
import FormikInput from '../../General/Constants/Text/Inputs/FormikInput'
import { Title3 } from '../../General/Constants/Text/Title3'
import FoodMacrosChart from '../Training/Pages/Diet/Components/FoodMacrosChart'
import ExcersiseShowLibrary from './Components/ExcersiseShowLibrary'
import FoodShowLibrary from './Components/FoodShowLibrary'
import GeneralLibrary from './GeneralLibrary'
import { getBaseTrainerFood, getBaseFoods, addBaseFoodsPage } from '../../../Store/Diets/food';
import Loading from '../../General/Constants/Loading/Loading'
import * as Yup from 'yup'
import ButtonMain from '../../General/Constants/Button/ButtonMain'
import {postBaseFood} from '../../../Store/Diets/food'
import apiDiet from '../../../Api/apiDiet'
import TagList from '../../General/Constants/TagLIst'

 function AddFoodForm(props : any){

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
        <Formik validationSchema={validationSchema} onSubmit={(data : any) =>  { dispatch(postBaseFood(data)); props.onHide(); }} initialValues={props.initialValues ? props.initialValues: {name : '', protein :  0, carbohydrates : 0, fat :  0, kcalories : 0, portion_weight: 100, tags : []}}>
            {
                ({values, handleSubmit, setFieldValue}) => (
                    <>

                        <Title3>Nombre</Title3>
                        <FormikInput placeholder="Nombre..." style={{backgroundColor: theme.colors.secondary, marginTop: 10, width: "100%", padding: 8,}} name="name"></FormikInput>

                        <Row className="mt-5 align-items-center">

                            <Col>
                            
                                <div className="w-100 mb-4 d-flex justify-content-between align-items-center">
                                    <Title3 color="primary" style={{paddingRight: 15}}><Bolder>Kcalories</Bolder></Title3>
                                    <div className="d-flex align-items-center">
                                        <FormikInput name="kcalories" placeholder="kcalories" style={{maxWidth: 170, backgroundColor: theme.colors.secondary, marginRight: 33}}>
                                        </FormikInput>

                                    </div>

                                </div>

                                <div className="w-100 mb-4 d-flex justify-content-between align-items-center">
                                    <Title3 color="#FD413C" style={{paddingRight: 15}}><Bolder>Proteínas</Bolder></Title3>
                                    <div className="d-flex align-items-center">
                                        <FormikInput name="protein" placeholder="gr de proteínas" style={{maxWidth: 170, backgroundColor: theme.colors.secondary, marginRight: 10}}>
                                        </FormikInput>
                                        <Title3>gr</Title3>
                                    </div>

                                </div>

                                <div className="w-100 mb-4 d-flex justify-content-between align-items-center">
                                    <Title3 color="#FFDD68" style={{paddingRight: 15}}><Bolder>Carbohídratos</Bolder></Title3>
                                    <div className="d-flex align-items-center">
                                        <FormikInput name="carbohydrates" placeholder="gr de carbs" style={{maxWidth: 170, backgroundColor: theme.colors.secondary, marginRight: 10}}>
                                        </FormikInput>
                                        <Title3>gr</Title3>
                                    </div>

                                </div>
                            
                                <div className="w-100 mb-2 d-flex justify-content-between align-items-center">
                                    <Title3 color="#22A447" style={{paddingRight: 15}}><Bolder>Grasas</Bolder></Title3>
                                    <div className="d-flex align-items-center">
                                        <FormikInput name="fat" placeholder="gr de grasas" style={{maxWidth: 170, backgroundColor: theme.colors.secondary, marginRight: 10}}>
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
                            <ButtonMain onClick={handleSubmit}>Agregar</ButtonMain>
                        </div>

                    </>
                )
            }
        </Formik>
    )
}


export default function FoodLibrary() {




    const [show, setShow] = useState<boolean>(false);



    return (
        <div>
            
        <div>

            <GeneralLibrary 
            name="alimentos"
            redux={
                {
                    privateGetAction: getBaseTrainerFood,
                    publicGetAction : getBaseFoods,
                    loadMore: addBaseFoodsPage,
                    privateSelector: (state : any) =>  state.training.diet.baseFood.privateList,
                    publicSelector : (state : any) =>  state.training.diet.baseFood.list,
                    loading: (state : any) =>  state.training.diet.baseFood.loading,
                    next : (state : any) =>  state.training.diet.baseFood.next
                }
            }
            onClick={() => console.log("hello world")}
            Component={(obj : any) => <FoodShowLibrary obj={obj}></FoodShowLibrary>}
            modal={{title: "Añadir alimento", footer: <></>, children: <AddFoodForm onHide={() => setShow(false)}></AddFoodForm>, onHide: () => null, show: show}}
            show={show}
            getTags={apiDiet.getFoodTags}
            setShow={setShow}
            ></GeneralLibrary>
{/* 
            <GeneralLibrary 

            ElementList={food}
            onClick={() => console.log("hello world")}
            Component={(obj : any) => <FoodShowLibrary obj={obj}></FoodShowLibrary>}
            modal={{title: "Añadir comida", footer: <></>, children: <AddFoodForm></AddFoodForm>, onHide: () => console.log("hello"), show: null}}
            ></GeneralLibrary> */}
            
        </div>
        </div>
    )
}
