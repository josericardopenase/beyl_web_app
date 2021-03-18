import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaCheck, FaChessKing } from 'react-icons/fa'
import useThemes from '../../../../CustomHooks/useThemes'
import { Bolder } from '../../../General/Constants/Text/Bolder'
import { Title1 } from '../../../General/Constants/Text/Title1'
import { Title2 } from '../../../General/Constants/Text/Title2'
import { Title3 } from '../../../General/Constants/Text/Title3'
import { Title4 } from '../../../General/Constants/Text/Title4'
import { Title5 } from '../../../General/Constants/Text/Title5'

function Checklist({children} : any){

    return (
        <div className="d-flex mb-2 align-items-center">

            <div>
                <FaCheck size={17} color="#22A447" ></FaCheck>
            </div>

            <Title4 style={{marginLeft: 15, textAlign: "left"}}>
            {children}
            </Title4>
        </div>
    )
}

export default function Plan() {

    const theme = useThemes()

    return (
        <div className="w-100 mt-4">
{/*             HEADER */}
           <div className="w-100 bg-danger align-items-center d-flex" style={{height: "8rem", borderRadius: "10px 10px 0px 0px"}}>
               <Title1 color="black" style={{marginLeft: 20}}><Bolder>Plan beta</Bolder></Title1>

            </div> 
            <div className="p-4" style={{backgroundColor: theme.colors.secondary,  borderRadius: "0px 0px 10px 10px"}}>

            <Row>
                <Col lg="6">

                    <Title4>Hasta 20 atletas al mismo tiempo</Title4>

                </Col>

                <Col lg="6" className="mt-4 mt-lg-0 d-flex align-items-start align-items-lg-center flex-column text-left">

                    <div>
                        <Checklist>Herramienta para creación de dietas y estrenos</Checklist>
                        <Checklist>Herramienta para gestión de clientes</Checklist>
                        <Checklist>Aplicación móvil para tus clientes</Checklist>
                        <Checklist>Atención al cliente</Checklist>
                        <Checklist>Soporte técnico personalizado</Checklist>
                        <Checklist>¡Muchas más cosa por venir!</Checklist>
                    </div>
                </Col>
            </Row>

            <hr style={{backgroundColor: theme.colors.tertiary}}></hr>

            <Title2><Bolder>GRATUITO</Bolder></Title2>
            </div>
        </div>
    )
}
