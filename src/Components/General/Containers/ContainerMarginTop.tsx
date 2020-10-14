import React from 'react'
import PropsInterfaces from '../Interfaces/PropsInterface'

export default function ContainerMarginTop({children} : PropsInterfaces.IOnlyChildren) {
    return (
        <div style={{marginTop: "20px"}}>
            {children}
        </div>
    )
}
