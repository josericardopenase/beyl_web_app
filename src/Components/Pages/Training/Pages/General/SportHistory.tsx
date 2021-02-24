import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { FaCalendar, FaClock } from 'react-icons/fa'
import { useDispatch, useSelector, useStore } from 'react-redux'
import useThemes from '../../../../../CustomHooks/useThemes'
import { getGeneralHistoryFromUser } from '../../../../../Store/generalHistory'
import { Icon } from '../../../../General/Constants/Icons/Icon'
import Loading from '../../../../General/Constants/Loading/Loading'
import { Title3 } from '../../../../General/Constants/Text/Title3'
import { Title4 } from '../../../../General/Constants/Text/Title4'
import { Title5 } from '../../../../General/Constants/Text/Title5'
import { ContainerBlockBox } from '../../../../General/Containers/ContainerBlockBox'
import ContainerBox from '../../../../General/Containers/ContainerBox'
import { ContainerCard } from '../../../../General/Containers/ContainerCard'
import { ContainerGraphs } from '../../../../General/Containers/ContainerGraphs'
import NotFound from '../../../../General/Errors/NotFound'
import NotFoundLastPublications from '../../../../General/Errors/NotFoundLastPublications'

export default function SportHistory() {

    const theme = useThemes()

    const athlete = useStore().getState().athletes.selectedAthlete
    const generalHistory = useSelector((state : any) => state.generalHistory.list.filter((x : any) => x !== athlete.id))
    const loading = useSelector((state : any) => state.generalHistory.loading)
    const dispatch = useDispatch()

    const themes = useThemes()
    useEffect(() => {
        if(athlete !== undefined){
            dispatch(getGeneralHistoryFromUser(athlete.id))
        }

    }, [athlete]) 

    if(loading){
      return <Loading></Loading>
    }

    return (
        <ContainerGraphs col={4} title={"Historial"} >
        {

            generalHistory.length != 0  ? 
                generalHistory.map((x: any) => (
                    <div style={{backgroundColor: theme.colors.primary, borderRadius: 15}} className="p-4 mt-2 d-flex justify-content-between align-items-center">
                        <Title4>{x.name}</Title4>
                        <div>
                            <div className="d-flex">
                                <Icon size={"12px"}>
                                    <FaClock></FaClock>
                                </Icon>
                                <Title5 style={{marginLeft: 10}}>{x.time}</Title5>
                            </div>
                            <div className="d-flex mt-2">
                                <Icon size={"12px"}>
                                    <FaCalendar/>
                                </Icon>
                                <Title5 style={{marginLeft: 10}}>{x.date}</Title5>
                            </div>
                        </div>
                    </div>
                )
            )
            :
            (
                <NotFound message="Tu cliente aún no han publicado nada."
                    svg={
                        <NotFoundLastPublications></NotFoundLastPublications>
                    } 
                >
                </NotFound>
            )
        }
        </ContainerGraphs>
    )
}
