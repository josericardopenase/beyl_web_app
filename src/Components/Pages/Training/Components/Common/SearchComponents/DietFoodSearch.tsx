import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Bolder } from '../../../../../General/Constants/Text/Bolder'
import { Title3 } from '../../../../../General/Constants/Text/Title3'
import { Title4 } from '../../../../../General/Constants/Text/Title4'
import { Title5 } from '../../../../../General/Constants/Text/Title5'
import ContainerBox from '../../../../../General/Containers/ContainerBox'
import MacroCounter from '../../../Pages/Diet/Components/MacroCounter'

interface IProps{
    obj : any
}

export default function DietFoodSearch ({obj} : IProps) {
    return (
        <ContainerBox>
            <Row className="align-items-center p-2">
                <Col md={12}>
                    <div className="d-flex flex-column justify-content-center">
                        <Title3 style={{marginBottom: "0.5rem"}}><Bolder>{obj.name}</Bolder></Title3>
                        <Title4>Por {obj.portion_weight} gr:</Title4>
                    </div>
                </Col>
                <MacroCounter portion_cuantity={obj.portion_weight} portion_weight={obj.portion_weight} protein={obj.protein} carbos={obj.carbohydrates} calories={obj.kcalories} grasas={obj.fat} unity={"gr"}></MacroCounter>
            </Row>
        </ContainerBox>
    )
}
