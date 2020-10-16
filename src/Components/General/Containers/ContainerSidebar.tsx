import React from 'react'
import PropsInterfaces from '../Interfaces/PropsInterface'

export const ContainerSidebar = ({children} : PropsInterfaces.IOnlyChildren ) => {
    return (
        <div style={{marginLeft: "70px", padding: "1px", overflowX: "hidden"}}>
            
            {
                children
            }

        </div>
    )
}

