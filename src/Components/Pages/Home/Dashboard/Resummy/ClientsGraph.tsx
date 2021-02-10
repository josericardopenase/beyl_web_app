import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { FaCalendar, FaClock } from 'react-icons/fa'
import { useDispatch, useSelector, useStore } from 'react-redux'
import useThemes from '../../../../../CustomHooks/useThemes'
import { loadAthletes } from '../../../../../Store/athleltes'
import { getGeneralHistory } from '../../../../../Store/generalHistory'
import { Icon } from '../../../../General/Constants/Icons/Icon'
import ProfilePicIcon from '../../../../General/Constants/Icons/ProfilePicIcon'
import { Title3 } from '../../../../General/Constants/Text/Title3'
import { Title4 } from '../../../../General/Constants/Text/Title4'
import { Title5 } from '../../../../General/Constants/Text/Title5'
import { ContainerGraphs } from '../../../../General/Containers/ContainerGraphs'

export default function ClientsGraph() {

    const theme = useThemes()

    const generalHistory = useSelector((state : any) => state.athletes.list.slice(0, 3))
    const loading = useSelector((state : any) => state.athletes.loading)
    const dispatch = useDispatch()
    const themes = useThemes()

    useEffect(() => {
            dispatch(loadAthletes)
    }, []) 

    if(loading){
      return <div>invalid</div>
    }

    console.log(generalHistory)

    return (
        <ContainerGraphs col={8} title={"Atletas recientes"} >
            <Row className="align-items-center">
        {

            generalHistory.length > 0  ? 
                generalHistory.map((x: any) => (
                    <Col md={4} style={{backgroundColor: theme.colors.primary, borderRadius: 25, border: `10px ${themes.colors.secondary} solid`}} className="p-4 mt-2 d-flex justify-content-center align-items-stretch">
                        <div className="d-flex justify-content-center p-3 flex-column text-center align-items-center">
                            <ProfilePicIcon size={180} url={x.user.profile_pic}></ProfilePicIcon>
                            <Title3 style={{marginTop: 20}}>{x.user.first_name + " " + x.user.last_name}</Title3>
                            <Title4 style={{marginTop: 10}} color="secondary">{x.user.email}</Title4>
                        </div>
                    </Col>
                )
            )
            :
            (
            <Title3 style={{padding: 15}}>Aun no existe actividad</Title3>
            )
        }
            </Row>
        </ContainerGraphs>
    )
}

