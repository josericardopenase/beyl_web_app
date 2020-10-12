import React, { Props } from 'react'
import PropsInterfaces from '../../Interfaces/PropsInterface'

export const Bolder = ({children} : PropsInterfaces.IOnlyChildren) => {
    return (
        <span style={{fontWeight: 600}}>
            {
                children
            }
        </span>
    )
}
