import React, { useState } from 'react'
import { Button, Col, Dropdown, Row } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import useThemes from '../../../../../CustomHooks/useThemes'
import VerticallyCenteredModal from '../../../../General/Constants/Modals/VerticallyCenteredModal'
import Input from '../../../../General/Constants/Text/Inputs/Input'
import Button1 from '../../../../General/Constants/Button/Button1'
import TextArea from '../../../../General/Constants/Text/Inputs/TextArea';
import MultipleModal from '../../../../General/Constants/Modals/MultipleModal';
import { Formik } from 'formik';
import SearchSelector from '../Common/SearchSelector';
import apiDiet from '../../../../../Api/apiDiet';
import TitleError from '../../../../General/Constants/Text/TitleError';
import DietFoodSearch from '../Common/SearchComponents/DietFoodSearch';
import { Title3 } from '../../../../General/Constants/Text/Title3';
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';
import { postDietFood } from '../../../../../Store/Diets/dietFoods';
import FormikInput from '../../../../General/Constants/Text/Inputs/FormikInput';
import FoodMacrosChart from '../../Pages/Diet/Components/FoodMacrosChart';
import MacroCounter from '../../Pages/Diet/Components/MacroCounter';


const validationSchema = Yup.object().shape({
    portion_cuantity: Yup.number().integer("No se permiten números decimales").required("La cantidad de alimento es un campo necesario.").min(2, "La cantidad mínima de alimento es 1gr").max(2000, "La cantidad máxima de alimento es 2 kg"),
    portion_unity: Yup.string().required("Es necesario especificar la unidad de medida."),
    food: Yup.number().typeError("Tienes que elegir un alimento para continuar.").required("Tienes que elegir un alimento para continuar.")

})

export default function AddFood(props: any) {

    const theme = useThemes();
    const [slide, setSlide] = useState<number>(0);
    const dispatch = useDispatch()
    const [selectedItems, setSelectedItems] = useState<any>(null);

    function postData(values : any, resetForm : any) : void{
        dispatch(postDietFood(values))
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

        <Formik validationSchema={validationSchema} initialValues={{group : props.id, food : null , portion_unity: "gr", portion_cuantity : 1}} onSubmit={(values,  {resetForm}) =>  {postData(values, resetForm); }}>
        {
        
            ({values, errors, touched, handleChange, handleSubmit, isSubmitting, handleBlur, resetForm}) => (

                <MultipleModal resetForm = {resetForm} slide={slide} setSlide={setSlide}  canSlide={() => values.food != null} errors={errors} {...props}  onHide={() => onHide(resetForm)} title="Añadir alimento" onFinish={handleSubmit}>
                {

                    [

                    <div>
                    
                        <SearchSelector multiple={false} name={"food"}  
                        element={(obj : any) => <DietFoodSearch obj ={obj}></DietFoodSearch>}
                        apiFunction = {apiDiet.getFood}
                        setSelectedItems={setSelectedItems}
                        selectedItems={selectedItems}
                        ></SearchSelector>
                        { errors.food ? <TitleError>{errors.food}</TitleError> : null }
                    </div>
                    
                    ,

                    <>
                        <Row>

                            <Col >
                                <div className="d-flex">
                                    <FormikInput autocomplete="off" defaultValue={values.portion_cuantity} type="number" name="portion_cuantity" style={{backgroundColor: theme.colors.secondary, width: "100%"}} 
                                    placeholder = {"Cantidad de ración"}></FormikInput>
                                    <Title3 style={{marginRight : 10, marginLeft: 10}}>gr</Title3>
                                    <select>
                                        <option value="gr">gr</option>
                                        <option value="ml">ml</option>
                                        <option value="unity">uniad</option>
                                    </select>
                                </div>

                                <div className="mt-5">
                                    {
                                    selectedItems ?
                                    <MacroCounter fontSize={16} unity={"gr"} protein={selectedItems.protein} carbos = {selectedItems.carbohydrates} grasas={selectedItems.fat} calories={selectedItems.kcalories} portion_cuantity={values.portion_cuantity} portion_weight={selectedItems.portion_weight} ></MacroCounter>
                                    :
                                    null

                                    }
                                </div>
                            </Col>
                            <Col lg={6}>

                                <FoodMacrosChart  showTooltip hasCalories width={"100%"} height={220} food= {{food : selectedItems}} actualWeight={values.portion_cuantity}></FoodMacrosChart>

                            </Col>
                        </Row>

                    </>
                    ]
                }
                </MultipleModal>
            )
        }

        </Formik>
    )
}
