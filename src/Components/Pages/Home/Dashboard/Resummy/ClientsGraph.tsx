import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { FaCalendar, FaClock } from 'react-icons/fa'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { Link } from 'react-router-dom'
import useThemes from '../../../../../CustomHooks/useThemes'
import { loadAthletes } from '../../../../../Store/athleltes'
import { getGeneralHistory } from '../../../../../Store/generalHistory'
import Bottom1 from '../../../../General/Constants/Button/Button1'
import { Icon } from '../../../../General/Constants/Icons/Icon'
import ProfilePicIcon from '../../../../General/Constants/Icons/ProfilePicIcon'
import Loading from '../../../../General/Constants/Loading/Loading'
import { Title3 } from '../../../../General/Constants/Text/Title3'
import { Title4 } from '../../../../General/Constants/Text/Title4'
import { Title5 } from '../../../../General/Constants/Text/Title5'
import { ContainerGraphs } from '../../../../General/Containers/ContainerGraphs'
import NotFound from '../../../../General/Errors/NotFound'
import NotFoundAthletes from '../../../../General/Errors/NotFoundAthletes'
import NotFoundLastPublications from '../../../../General/Errors/NotFoundLastPublications'

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
      return <Loading></Loading>
    }

    return (
        <ContainerGraphs col={8} title={"Atletas recientes"} >
            <Row className="align-items-center">
        {

            generalHistory.length > 0  ? 
                generalHistory.map((x: any, index: number) => (
                    <Col key={index} md={4} style={{backgroundColor: theme.colors.primary, borderRadius: 25, border: `10px ${themes.colors.secondary} solid`}} className="p-4 mt-2 d-flex justify-content-center align-items-stretch">
                        <div className="d-flex justify-content-center p-3 flex-column text-center align-items-center">
                            <ProfilePicIcon size={130} url={x.user.profile_pic}></ProfilePicIcon>
                            <Title3 style={{marginTop: 20}}>{x.user.first_name + " " + x.user.last_name}</Title3>
                            <Title4 style={{marginTop: 10}} color="secondary">{x.user.email}</Title4>
                        </div>
                    </Col>
                )
            )
            :
            (
                <NotFound message="No tienes ningún atleta ahora mismo"
                
                svg={
                    <NotFoundAthletes></NotFoundAthletes>
                } 
                
                >
                    <Link to="/config/clientes">
                        <Bottom1 className="mt-3">Añade un atleta</Bottom1>
                    </Link>
                </NotFound>
            )
        }
            </Row>
        </ContainerGraphs>
    )
}

