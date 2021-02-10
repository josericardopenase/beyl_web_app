import React, { useEffect, useState } from 'react'
import { FaCalendar, FaClock } from 'react-icons/fa'
import { useDispatch, useSelector, useStore } from 'react-redux'
import useThemes from '../../../../../CustomHooks/useThemes'
import { getGeneralHistory } from '../../../../../Store/generalHistory'
import { Icon } from '../../../../General/Constants/Icons/Icon'
import ProfilePicIcon from '../../../../General/Constants/Icons/ProfilePicIcon'
import { Title3 } from '../../../../General/Constants/Text/Title3'
import { Title4 } from '../../../../General/Constants/Text/Title4'
import { Title5 } from '../../../../General/Constants/Text/Title5'
import { ContainerGraphs } from '../../../../General/Containers/ContainerGraphs'

export default function LastUpdates() {

    const theme = useThemes()

    const generalHistory = useSelector((state : any) => state.generalHistory.list)
    const loading = useSelector((state : any) => state.generalHistory.loading)
    const dispatch = useDispatch()

    const themes = useThemes()
    useEffect(() => {
            dispatch(getGeneralHistory())
    
        
    }, []) 

    if(loading){
      return <div>Loading</div>
    }

    console.log(generalHistory)

    return (
        <ContainerGraphs col={4} title={"Ultimas publicaciones"} >
        {

            generalHistory.length  ? 
                generalHistory.map((x: any) => (
                    <div style={{backgroundColor: theme.colors.primary, borderRadius: 15}} className="p-4 mt-2 d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <ProfilePicIcon size={40} url={x.user.user.profile_pic}></ProfilePicIcon>
                            <div>
                                <Title4 style={{marginLeft: 15}}>{x.name}</Title4>
                                <Title5 color="secondary" style={{marginLeft: 15, marginTop: 5 }}>{x.user.user.first_name + " " + x.user.user.last_name}</Title5>
                            </div>
                        </div>
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
            <Title3>Aun no existe actividad</Title3>
            )
        }
        </ContainerGraphs>
    )
}

