import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaRuler, FaRunning, FaWeight } from 'react-icons/fa'
import { useStore } from 'react-redux'
import useThemes from '../../../../../CustomHooks/useThemes'
import { getAmountExcersise } from '../../../../General/Constants/functions/DietFunctions'
import Loading from '../../../../General/Constants/Loading/Loading'
import { Bolder } from '../../../../General/Constants/Text/Bolder'
import { Title3 } from '../../../../General/Constants/Text/Title3'
import { Title4 } from '../../../../General/Constants/Text/Title4'
import { ContainerBlockBox } from '../../../../General/Containers/ContainerBlockBox'
import ContainerBox from '../../../../General/Containers/ContainerBox'
import { ContainerCard } from '../../../../General/Containers/ContainerCard'
import { ContainerGraphs } from '../../../../General/Containers/ContainerGraphs'
import Themes from '../../../../General/Styles/Themes'

function DataDisplay({icon, value} : any){

    const theme = useThemes()

    return (

                    <div className="d-flex mt-4 mb-2 pr-4 align-items-center">
                        <div style={{color: Themes.beylColor, fontSize: 20, marginRight: 20}}>
                            {icon}
                        </div>
                        <Title4><Bolder>{value}</Bolder></Title4> 
                    </div>
    )

}

export default function FitnessData() {

    const theme = useThemes()

    const athlete = useStore().getState().athletes.selectedAthlete;

    if(!athlete){
        return <Loading></Loading>
    }

    return (
        <ContainerGraphs col={5} title={"Datos corporales"} >
            <Row>

                <Col>
                    <DataDisplay icon = {<FaWeight></FaWeight>} value={athlete.weight + " kg"}></DataDisplay>
                    <DataDisplay icon = {<FaRuler></FaRuler>} value={athlete.height + " cm"}></DataDisplay>
                    <DataDisplay icon={<FaRunning></FaRunning>} value={getAmountExcersise(athlete.amount_excersise)}></DataDisplay>
                </Col>
            </Row>

        </ContainerGraphs>
    )
}

