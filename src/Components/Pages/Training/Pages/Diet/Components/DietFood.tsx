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

export const DietFood = ({obj, index} : any) => {

    const food : types.DietFood = {
        portionCuantity : 100,
        portionUnity : "gr",
        order: 1,
        food : {
            name: "arroz",
            protein: 15,
            carbohydrates: 10,
            fat: 10,
            kcalories : 100,
            portionWeight :  100,
        }
    }

    return (
        <DayElement component = {food} id={obj.id} index={index}
        modifyElement={
            (component, show, hide) => <ModifyFood show={show} food={component} onHide={hide}></ModifyFood>
        } 
        >

            <Row className="align-items-center">

                <Col md={4}>
                    <img style={{borderRadius: "20px", objectFit: "cover", width: "100%", height: "100%" }} src={"https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2018/12/cuanto-arroz-necesito-cocinar-para-100-personas.jpg"} />
                </Col>
                
                <Col md={8}>
                    <Title3 style={{marginBottom: "0.5rem"}}><Bolder>Arroz blanco</Bolder></Title3>
                    <Title4 color="secondary">200gr</Title4>
                </Col>
            </Row>


        </DayElement>
    )
}
