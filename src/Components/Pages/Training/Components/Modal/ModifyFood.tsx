import { Formik } from 'formik'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import useThemes from '../../../../../CustomHooks/useThemes';
import { patchDietFood } from '../../../../../Store/Diets/dietFoods';
import { DietFood } from '../../../../../Types/Types'
import Bottom1 from '../../../../General/Constants/Button/Button1'
import VerticallyCenteredModal from '../../../../General/Constants/Modals/VerticallyCenteredModal'
import FormikInput from '../../../../General/Constants/Text/Inputs/FormikInput'
import { Title2 } from '../../../../General/Constants/Text/Title2';
import { Title3 } from '../../../../General/Constants/Text/Title3'
import Themes from '../../../../General/Styles/Themes';
import FoodMacrosChart from '../../Pages/Diet/Components/FoodMacrosChart';
import Modify from './Modify'

interface props{
    food : any,
    show : any,
    onHide : any
}

export default function ModifyFood({food, show, onHide} : props) {

    const dispatch = useDispatch();

    function saveChanges(data : any){
        dispatch(patchDietFood({id : food.id, ...data}))
        onHide();
    }

    return (
        <Modify title={"Modificar Alimento"} show={show} onHide={onHide}>

            <Container fluid>

                        <Formik initialValues={{portion_cuantity: food.portion_cuantity}} onSubmit={(data) =>   saveChanges(data)}>

                            {
                                ({values, handleSubmit}) => (
                                    <>
                                    <Row>
                                        <Col lg={6}>
                                            <Title2 style={{marginBottom: 20}}>{food.food.name}</Title2>
                                                <div>
                                                    <div className="d-flex align-items-center">
                                                        <FormikInput name="portion_cuantity" primary={true} defaultValue={food.portion_cuantity} ></FormikInput>
                                                        <Title3 style={{marginLeft: 10}}>Gr</Title3>
                                                    </div>

                                                </div>
                                        </Col>

                                        <Col lg={6}>

                                            <FoodMacrosChart showTooltip hasCalories width={"100%"} height={200} food={food} actualWeight={values.portion_cuantity}></FoodMacrosChart>

                                        </Col>

                                    </Row>
                                        <div className="d-flex justify-content-end mt-3">
                                            <Button style={{backgroundColor: Themes.beylColor, border: "0px", marginLeft: 10}} onClick={() => handleSubmit()}>Guardar</Button>
                                        </div>
                                    </>
                                )

                            }

                        </Formik>

            </Container>
        </Modify>
    )
}
