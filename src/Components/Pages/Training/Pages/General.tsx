import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Bolder } from '../../../General/Constants/Text/Bolder'
import { Title3 } from '../../../General/Constants/Text/Title3'
import SportHistory from './General/SportHistory'
import WeightGraph from './General/WeightGraph'

import PersonalData from './General/PersonalData'
import FitnessData from './General/FitnessData'
  
export const General = () => {
    return (
        <div className="pr-4 align-items-stretch">

            <Row className="align-items-stretch">
                    <WeightGraph></WeightGraph>
                    <SportHistory></SportHistory>
            </Row>

            <Row className="align-items-stretch">
                    <PersonalData></PersonalData>
                    <FitnessData/>
            </Row>

        </div>
    )
}
