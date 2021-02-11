import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Bolder } from '../../../../../General/Constants/Text/Bolder'
import { Title3 } from '../../../../../General/Constants/Text/Title3'
import ContainerBox from '../../../../../General/Containers/ContainerBox'
import ExcersisePuntuation from '../../../Pages/Rutine/Components/ExcersisePuntuation'

interface IProps{
    obj : any
}

export default function RutineExcersiseSearch({obj} : IProps) {
    return (
                        <ContainerBox>
                            <Row className = "align-items-center">
                                <Col sm={3}>
                                    <img style={{width: "100%", height: 100, objectFit: "cover", borderRadius: 20}} src = {obj.image}></img>                                        
                                </Col>

                                <Col sm ={9}>
                                    <Title3><Bolder>{obj.name}</Bolder></Title3>
                                    <ExcersisePuntuation puntuation={obj.difficult}></ExcersisePuntuation>
                                </Col>
                            </Row>
                        </ContainerBox>
    )
}