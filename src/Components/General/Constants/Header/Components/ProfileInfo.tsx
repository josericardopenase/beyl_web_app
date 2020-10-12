import React from 'react'
import ProfilePicIcon from '../../Icons/ProfilePicIcon'
import { Title4 } from '../../Text/Title4'

export const ProfileInfo = () => {
    return (
        <div className="d-flex align-items-center">
            <ProfilePicIcon size={30}></ProfilePicIcon>
            <Title4 style={{marginLeft: 10}}>jose Ricardo Peña</Title4>
        </div>
    )
}
