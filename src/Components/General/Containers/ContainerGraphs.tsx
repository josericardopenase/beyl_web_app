import React, { Children } from 'react'
import { Col } from 'react-bootstrap'
import useThemes from '../../../CustomHooks/useThemes'
import { Bolder } from '../Constants/Text/Bolder'
import { Title2 } from '../Constants/Text/Title2'
import { Title3 } from '../Constants/Text/Title3'

interface props {
    title: string,
    children: any,
    col : number
}

export const ContainerGraphs = ({title, children, col} : props) => {

    const themes = useThemes()

    return (
        <Col xl={col} style={{marginTop: 0, padding: "1.5rem", backgroundColor : themes.colors.secondary, width: "100%", borderRadius: 30, alignSelf: "stretch", border: "10px solid" + themes.colors.primary}} className="align-items-stretch p-4 ">

            <Title3 style={{marginBottom: 20}}><Bolder>{title}</Bolder></Title3>

            {children}
            
        </Col>
    )
}
