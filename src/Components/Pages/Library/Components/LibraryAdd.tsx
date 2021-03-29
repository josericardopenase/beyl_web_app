import React from 'react'
import { Col } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import useThemes from '../../../../CustomHooks/useThemes'
import { Icon } from '../../../General/Constants/Icons/Icon'
import { Title3 } from '../../../General/Constants/Text/Title3'
import ContainerBox from '../../../General/Containers/ContainerBox'


interface IProps{

    onClick ?: (...args : any) => void,
}

export default function LibraryAdd({onClick} : IProps) {

    const theme = useThemes();

    return (
        <Col md={12} lg={4} xl={3} onClick={onClick} style={{cursor: "pointer", backgroundColor: theme.colors.secondary, paddingTop: 30, paddingBottom : 30, borderRadius: 25, border: `7px solid ${theme.colors.primary}`}} className="d-flex align-items-center flex-column justify-content-center">

                <Icon color={theme.colors.textPrimary} size="40">
                    <AiOutlinePlus></AiOutlinePlus> 
                </Icon>
                <Title3 style={{marginTop: 14}}>Crear nuevo</Title3>

        </Col>
    )
}
