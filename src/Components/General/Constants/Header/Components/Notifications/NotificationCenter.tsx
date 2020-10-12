import React from 'react'
import { FaBell, FaFonticonsFi } from 'react-icons/fa'
import { Icon } from '../../../Icons/Icon'


interface notification{

}

export const NotificationCenter = () => {
    return (
        <div style={{marginRight: 15, marginLeft: 5}}>
            <Icon>
                <FaBell></FaBell>
            </Icon>
        </div>
    )
}
