import React, { Children } from 'react'
import { Col } from 'react-bootstrap'
import useThemes from '../../../CustomHooks/useThemes'
import InterrogationTooltip from '../Constants/GeneralPropose/InterrogationTooltip'
import { Bolder } from '../Constants/Text/Bolder'
import { Title2 } from '../Constants/Text/Title2'
import { Title3 } from '../Constants/Text/Title3'

interface props {
    title: string,
    children: any,
    col : number,
    aclaration ?: string
}

export const ContainerGraphs = ({title, children, col, aclaration, ...otherProps} : props) => {

    const themes = useThemes()

    return (
        <Col xl={col} style={{marginTop: 0, padding: "1.5rem", backgroundColor : themes.colors.secondary, width: "100%", borderRadius: 35, alignSelf: "stretch", border: "10px solid" + themes.colors.primary}} className="align-items-stretch p-4 d-flex flex-column" {...otherProps} >

            <div className="d-flex align-items-center" style={{marginBottom: 20, marginRight: 10}}>
                <Title3 ><Bolder>{title}</Bolder></Title3>
                {

                    aclaration ?

                    <InterrogationTooltip size="20" primaryColor>
                        {aclaration}
                    </InterrogationTooltip>

                    :

                    null
                }
            </div>

            {children}
            
        </Col>
    )
}
