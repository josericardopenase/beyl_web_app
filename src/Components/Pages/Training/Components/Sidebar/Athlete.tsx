import React from 'react'
import { Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link, NavLink, useLocation, useRouteMatch } from 'react-router-dom'
import * as types from '../../../../../Types/Types'
import ProfilePicIcon from '../../../../General/Constants/Icons/ProfilePicIcon'
import { Title4 } from '../../../../General/Constants/Text/Title4'
import ContainerBox from '../../../../General/Containers/ContainerBox'
import { Active } from './Active'


interface IProps {
    obj: any,
}

export const Athlete = ({obj} : IProps) => {

    const path = `${useRouteMatch().url}/${obj.id}`
    const url =  useRouteMatch(path)

    const handleClick = (e : any) => {
        if("/training/" + obj.id === url?.path) e.preventDefault()
    }

    return (
        <NavLink onClick={handleClick} to={{pathname : path,  state : { user :obj}}} activeClassName="bg-light"  >
            <div className="mt-3 mb-2">
                <ContainerBox>
                    <div className="d-flex align-items-center">
                        <ProfilePicIcon size={50} url={obj.user.profile_pic}></ProfilePicIcon>

                        <div className="ml-3">
                            <Title4>{obj.user.first_name + " " + obj.user.last_name}</Title4>
                        </div>

                        
                    </div>

                {
                    url ? <Active></Active> : null
                } 
                </ContainerBox>
            </div>
        </NavLink>
    

    )
}
