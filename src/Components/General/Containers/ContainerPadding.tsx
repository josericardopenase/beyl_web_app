import React from 'react'
export const ContainerPadding = ({children} : any) => {
    return (

            <div style={{padding: "20px"} as React.CSSProperties}>
                {
                    children
                }
            </div>

    )
}
