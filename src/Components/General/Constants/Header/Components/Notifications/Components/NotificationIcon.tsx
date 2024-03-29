import React from 'react'
import { FaBell, FaFonticonsFi } from 'react-icons/fa'
import { Icon } from '../../../../Icons/Icon'
import { NotificationBadge } from './NotificationIconComponents/NotificationBadge'

interface props{
    
    badge ?: boolean,
    onClick ?: () => any,
    Ref ?: any,

}

export const NotificationIcon = ({badge, onClick, Ref} : props) => {
    return (
        <div ref={Ref} style={{marginRight: 15, marginLeft: 5, position: "relative"}} onClick ={onClick}>
                
            <Icon>
                <FaBell></FaBell>
            </Icon>

            { badge ? <NotificationBadge></NotificationBadge> : null}
    
        </div>
    )
}
