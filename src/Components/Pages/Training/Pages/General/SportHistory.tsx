import React from 'react'
import { Container } from 'react-bootstrap'
import useThemes from '../../../../../CustomHooks/useThemes'
import { Title4 } from '../../../../General/Constants/Text/Title4'
import { ContainerBlockBox } from '../../../../General/Containers/ContainerBlockBox'
import ContainerBox from '../../../../General/Containers/ContainerBox'
import { ContainerCard } from '../../../../General/Containers/ContainerCard'
import { ContainerGraphs } from '../../../../General/Containers/ContainerGraphs'

export default function SportHistory() {

    const theme = useThemes()

    return (
        <ContainerGraphs col={4} title={"Historial de deportes"} >
        {
            [1,1,1,1,1].map((x: any) => (<div style={{backgroundColor: theme.colors.primary, borderRadius: 15}} className="p-4 mt-2">
                <Title4>🍎 Cheat meal</Title4>

            </div>
            )
            )
        }
        </ContainerGraphs>
    )
}
