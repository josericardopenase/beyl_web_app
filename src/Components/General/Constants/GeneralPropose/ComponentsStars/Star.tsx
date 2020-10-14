import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'
import Themes from '../../../Styles/Themes'
import { Icon } from '../../Icons/Icon'

interface props {
    enable : boolean
}

export const Star = ({enable} : props) => {
    return (
        <div style={{marginRight: 5}}>
            <Icon color={enable ? Themes.beylColor : undefined}>
                <FaStar></FaStar>
            </Icon>
        </div>
    )
}
