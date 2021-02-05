import React from 'react'
import { Button } from 'react-bootstrap'
import { DietFood } from '../../../../../Types/Types'
import Bottom1 from '../../../../General/Constants/Button/Button1'
import VerticallyCenteredModal from '../../../../General/Constants/Modals/VerticallyCenteredModal'
import Modify from './Modify'

interface props{
    food : DietFood,
    show : any,
    onHide : any
}

export default function ModifyFood({food, show, onHide} : props) {
    return (
        <Modify title={"Modificar Alimento"} show={show} onHide={onHide}>

            <div>{food.food.name}</div>
            
        </Modify>
    )
}
