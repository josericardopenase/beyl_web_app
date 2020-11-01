import React from 'react'
import PropsInterfaces from '../Interfaces/PropsInterface'

export const ContainerSidebarSelector = ({children} : PropsInterfaces.IOnlyChildren ) => {
    return (
        <div style={{marginLeft: "340px", padding: "1px", overflowX: "hidden"}}>
            
            {
                children
            }

        </div>
    )
}

