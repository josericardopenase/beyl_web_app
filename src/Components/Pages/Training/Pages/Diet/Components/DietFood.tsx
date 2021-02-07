import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Bolder } from '../../../../../General/Constants/Text/Bolder'
import { Title3 } from '../../../../../General/Constants/Text/Title3'
import { Title4 } from '../../../../../General/Constants/Text/Title4'
import ContainerBox from '../../../../../General/Containers/ContainerBox'
import DraggingComponent from '../../../../../General/Constants/DragAndDrop/DraggingComponent'
import ModifyFood from '../../../Components/Modal/ModifyFood'
import * as types from '../../../../../../Types/Types'
import DayElement from '../../../Components/Common/DayElement'
import MacroCounter from './MacroCounter'
import RemoveIcon from '../../../../../General/Constants/Icons/RemoveIcon'
import { deleteDietFood } from '../../../../../../Store/Diets/dietFoods'
import { useDispatch } from 'react-redux'

export const DietFood = ({obj, index} : any) => {

    const dispatch = useDispatch()

    return (
        <DayElement component = {obj} id={obj.id} index={obj.order}
            modifyElement={
                (component, show, hide) => <ModifyFood show={show} food={component} onHide={hide}></ModifyFood>
            } 
        >

            <Row className="align-items-center p-2">
                <Col md={12}>
                    <div className="d-flex justify-content-between align-items-stretch w-100">
                        <div className="d-flex justify-content-center align-items-center mb-2">
                            <Title3><Bolder>{obj.food.name}</Bolder></Title3>
                            <Title4 color="secondary" style={{marginLeft: 10}}>| {obj.portion_cuantity} {obj.portion_unity}</Title4>
                        </div>
                        <div className="p-1 d-flex flex-column justify-content-between">

                            <RemoveIcon onClick={() => dispatch(deleteDietFood(obj.id))}></RemoveIcon>

                        </div>
                    </div>
                </Col>
                <MacroCounter portion_cuantity={obj.portion_cuantity} portion_weight={obj.food.portion_weight} protein={obj.food.protein} carbos={obj.food.carbohydrates} calories={obj.food.kcalories} grasas={obj.food.fat} unity={obj.portion_unity}></MacroCounter>
            </Row>


        </DayElement>
    )
}
