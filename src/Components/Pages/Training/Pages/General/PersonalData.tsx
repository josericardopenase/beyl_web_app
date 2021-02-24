import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useStore } from 'react-redux'
import useThemes from '../../../../../CustomHooks/useThemes'
import { Bolder } from '../../../../General/Constants/Text/Bolder'
import { Title3 } from '../../../../General/Constants/Text/Title3'
import { Title4 } from '../../../../General/Constants/Text/Title4'
import { ContainerBlockBox } from '../../../../General/Containers/ContainerBlockBox'
import ContainerBox from '../../../../General/Containers/ContainerBox'
import { ContainerCard } from '../../../../General/Containers/ContainerCard'
import { ContainerGraphs } from '../../../../General/Containers/ContainerGraphs'

function DataDisplay({data, value} : any){

    return (

            <div className="d-flex mt-4 mb-2 justify-content-between pr-4">
                <Title4 color="secondary">{data}</Title4> 
                <Title4><Bolder>{value}</Bolder></Title4> 
            </div>

    )

}

export default function PersonalData() {

    const theme = useThemes()

    const athlete = useStore().getState().athletes.selectedAthlete;

    if(!athlete){
        return <div>loading</div>
    }

    return (
        <ContainerGraphs col={7} title={"Datos personales"} >

            <Row>

                <Col>
                    <DataDisplay data="Nombre" value={athlete.user.first_name}></DataDisplay>
                    <DataDisplay data="Apellido" value={athlete.user.last_name}></DataDisplay>
                </Col>

                <Col>
                    <DataDisplay data="Género" value={athlete.sexo}></DataDisplay>
                    <DataDisplay data="Fecha de nacimiento" value={athlete.born_date}></DataDisplay>
                </Col>

            </Row>

            <DataDisplay data="Correo" value={athlete.user.email}></DataDisplay>
        </ContainerGraphs>
    )
}

