import React from 'react'
import { useSelector } from 'react-redux'
import ProfilePicIcon from '../../Icons/ProfilePicIcon'
import { Title4 } from '../../Text/Title4'

export const ProfileInfo = () => {

    const user = useSelector((state : any) =>  state.auth.user)

    if(!user){
        return <div></div>
    }

    return (
        <div className="d-flex align-items-center">
            <ProfilePicIcon url={'http://192.168.0.14:9000' + user.user.profile_pic} size={30}></ProfilePicIcon>
            <Title4 style={{marginLeft: 10}}>{user.user.first_name + " " + user.user.last_name}</Title4>
        </div>
    )
}
