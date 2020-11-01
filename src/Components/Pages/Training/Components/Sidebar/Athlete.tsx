import React from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProfilePicIcon from '../../../../General/Constants/Icons/ProfilePicIcon'
import { Title4 } from '../../../../General/Constants/Text/Title4'
import ContainerBox from '../../../../General/Containers/ContainerBox'
import { Active } from './Active'


interface IProps {
    active: boolean,
    name: String,
    image: String
}

export const Athlete = ({active, name, image} : IProps) => {
    return (
        <Link to="/training/1">
            <div className="mt-3">
                <ContainerBox>
                    <div className="d-flex align-items-center">
                        <ProfilePicIcon size={50} url={image}></ProfilePicIcon>

                        <div className="ml-3">
                            <Title4>{name}</Title4>
                        </div>

                        
                    </div>

                {
                    active ? <Active></Active> : null
                } 
                </ContainerBox>
            </div>
        </Link>

    )
}
