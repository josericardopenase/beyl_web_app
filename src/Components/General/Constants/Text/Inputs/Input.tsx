import { isAnyOf } from '@reduxjs/toolkit';
import { NONE } from 'apisauce';
import React, { useContext, useState } from 'react'
import ThemeContext from '../../../../../Store/Themes/ThemeContext'
import Themes from '../../../Styles/Themes';
import { Icon } from '../../Icons/Icon';

export default function Input(props : any) {

    const theme = useContext(ThemeContext)


    const style= {
        borderRadius: 10,
        border: 0,
        padding: "4px 10px 4px 10px",
        outline: 0,
        backgroundColor: props.primary ? theme.colors.secondary : theme.colors.primary,
        color: theme.colors.textPrimary,

    } as React.CSSProperties


    return (
        

            props.icon ? (
            <div style={{paddingLeft: 9, borderRadius: 5, display: "flex", alignItems: "center", ...style}}>
                {

                    props.icon ?
                    <Icon>
                        {props.icon}
                    </Icon>
                    : 
                    null
                }
                <input {...props} ref = { props.customref }  style={{...style, ...props.style}}></input> 
            </div>

            )
            :
            <input {...props} ref = { props.customref }  style={{...style, ...props.style}}></input> 
        
    )
}
