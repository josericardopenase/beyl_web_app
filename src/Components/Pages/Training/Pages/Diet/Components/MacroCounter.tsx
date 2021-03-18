import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Title5 } from '../../../../../General/Constants/Text/Title5'
import { Title4 } from '../../../../../General/Constants/Text/Title4'
import useThemes from '../../../../../../CustomHooks/useThemes'

interface  IProps{

    protein : number,
    carbos : number,
    grasas : number,
    calories : number,
    unity : string,
    portion_weight: number,
    portion_cuantity : number,
    fontSize ?: number

}

export default function MacroCounter({protein, carbos, grasas, calories, unity, portion_cuantity, portion_weight, fontSize} : IProps) {


    const magic_number : number = (Math.round((portion_cuantity / portion_weight) * 10)/10)
    const themes = useThemes();

    return (
        <Container fluid>
            <Row className=" mt-2 text-center">
                <Col>
                    <h5 color="#FD413C" style={{fontSize: fontSize, color : "#FD413C"}}>{(protein * magic_number).toFixed(1)} {unity}</h5>
                    <Title5 style={{marginTop: 5}}>Proteinas</Title5>
                </Col>

                <Col>
                    <h5 color="#FFDD68" style={{fontSize: fontSize, color: "#FFDD68"}}>{(carbos * magic_number).toFixed(1)} {unity}</h5>
                    <Title5 style={{marginTop: 5}}>Carbohidratos</Title5>
                </Col>

                <Col>
                    <h5 color="#22A447" style={{fontSize: fontSize, color: "#22A447"}}>{(grasas * magic_number).toFixed(1)} {unity}</h5>
                    <Title5 style={{marginTop: 5}}>Grasas</Title5>
                </Col>

                <Col>
                    <h5 color="#F5A623" style={{fontSize: fontSize, color: "#F5A623"}}>{(calories * magic_number).toFixed(1)}</h5>
                    <Title5 style={{marginTop: 5}}>Kcalorias</Title5>
                </Col>
            </Row>
        </Container>

    )
}
