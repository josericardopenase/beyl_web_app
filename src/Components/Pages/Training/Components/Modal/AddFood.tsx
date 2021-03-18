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
    portion_cuantity: Yup.number().required().min(1).max(2000),
    portion_unity: Yup.string().required(),
    food: Yup.number().required()

})

export default function AddFood(props: any) {

    const theme = useThemes();
    const [index, setIndex] = useState<number>(1);
    const dispatch = useDispatch()

    function postData(values : any) : void{
        dispatch(postDietFood(values))
    }


    return (

        <Formik validationSchema={validationSchema} initialValues={{group : props.id, food : null , portion_unity: "gr", portion_cuantity : 0}} onSubmit={(values, {resetForm}) =>  { console.log("hello"); postData(values); props.onHide(); resetForm();}}>
        {
        
            ({values, errors, touched, handleChange, handleSubmit, isSubmitting, handleBlur}) => (
                <MultipleModal {...props}  title="Añadir alimento" onFinish={handleSubmit}>
                {

                    [

                    <div>
                    
                        <SearchSelector multiple={false} name={"food"}  
                        element={(obj : any) => <DietFoodSearch obj ={obj}></DietFoodSearch>}
                        apiFunction = {apiDiet.getFood}
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
