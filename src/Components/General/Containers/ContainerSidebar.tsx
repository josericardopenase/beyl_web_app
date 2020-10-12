import React from 'react'
import PropsInterfaces from '../Interfaces/PropsInterface'

export const ContainerSidebar = ({children} : PropsInterfaces.IOnlyChildren ) => {
    return (
        <div style={{marginLeft: 80}}>
            
            {
                children
            }

        </div>
    )
}

