import React from 'react'
import { ContainerSidebar } from './ContainerSidebar'

export const ContainerPadding = ({children} : any) => {
    return (
        <ContainerSidebar>
            <div style={{padding: "20px"} as React.CSSProperties}>
                {
                    children
                }
            </div>
        </ContainerSidebar>
    )
}
