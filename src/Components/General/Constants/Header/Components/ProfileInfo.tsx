import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { FaArrowDown, FaChevronDown } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Icon } from '../../Icons/Icon'
import ProfilePicIcon from '../../Icons/ProfilePicIcon'
import { Title4 } from '../../Text/Title4'

export const ProfileInfo = () => {

    const user = useSelector((state : any) =>  state.auth.user)

    if(!user){
        return <div className="d-flex align-items-center" style={{cursor: "pointer"}}>
                <div style={{width: 30, height: 30, borderRadius: "50%", backgroundColor: "grey"}}></div>
                <div style={{width: 130, height: 30,  backgroundColor: "grey", borderRadius: 10, marginLeft: 10}}></div>
                <div style={{marginLeft: 10, marginRight: 10}}>
                    <Icon>
                        <FaChevronDown size={15}/>
                    </Icon>
                </div>
            </div>
    }

    return (
            <div className="d-flex align-items-center" style={{cursor: "pointer"}}>
                <ProfilePicIcon url={'http://192.168.0.14:9000' + user.user.profile_pic} size={30}></ProfilePicIcon>
                <Title4 style={{marginLeft: 10}}>{user.user.first_name + " " + user.user.last_name}</Title4>
                <div style={{marginLeft: 10, marginRight: 10}}>
                    <Icon>
                        <FaChevronDown size={15}/>
                    </Icon>
                </div>
            </div>
    )
}
