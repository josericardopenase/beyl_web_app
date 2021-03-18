import React, { useState } from 'react'
import { Button, Dropdown } from 'react-bootstrap';
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


const validationSchema = Yup.object().shape({
    portion_cuantity: Yup.number().required().min(1, "La cantidad mínima de alimento es 1gr").max(2000, "La cantidad máxima de alimento es 2 kg"),
    portion_unity: Yup.string().required("Es necesario especificar la unidad de medida"),
    food: Yup.number().typeError("Tienes que elegir un alimento para continuar.").required("Tienes que elegir un alimento para continuar")

})

export default function AddFood(props: any) {

    const theme = useThemes();
    const [slide, setSlide] = useState<number>(0);
    const dispatch = useDispatch()
    const [selectedItems, setSelectedItems] = useState<any>([]);

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

        <Formik validationSchema={validationSchema} initialValues={{group : props.id, food : null , portion_unity: "gr", portion_cuantity : 0}} onSubmit={(values,  {resetForm}) =>  {postData(values, resetForm); }}>
        {
        
            ({values, errors, touched, handleChange, handleSubmit, isSubmitting, handleBlur, resetForm}) => (

                <MultipleModal slide={slide} setSlide={setSlide}  canSlide={() => values.food != null} errors={errors} {...props}  onHide={() => onHide(resetForm)} title="Añadir alimento" onFinish={handleSubmit}>
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
                        <div className="d-flex">

                            <FormikInput type="number" name="portion_cuantity" style={{backgroundColor: theme.colors.secondary, width: "100%"}} 
                            placeholder = {"Cantidad de ración"}></FormikInput>

                            <Title3 style={{marginRight : 10, marginLeft: 10}}>gr</Title3>
{/*                             <Dropdown className="ml-2">

                                <Dropdown.Toggle style={{backgroundColor: theme.colors.secondary, border: 0}}>
                                    unidad
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Gramos</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Onza</Dropdown.Iy--mt-3">
                                        <Dropdown.Item href="#/action-3">Unidades</Dropdown.Item>
                                </Dropdown.Menu>

                            </Dropdown> */}
                        </div>

                    </>
                    ]
                }
                </MultipleModal>
            )
        }

        </Formik>
    )
}
