import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaComment } from 'react-icons/fa'
import { Bolder } from '../../../General/Constants/Text/Bolder'
import { Title1 } from '../../../General/Constants/Text/Title1'
import ContainerMarginTop from '../../../General/Containers/ContainerMarginTop'
import { News } from './News/News'


export const Home = () => {
    return (
        
        <ContainerMarginTop>        
            
            
            <Title1><Bolder>Bienvenido de nuevo,</Bolder> Jose</Title1>


            {/* Noticias display */}
            <News></News>


            




        </ContainerMarginTop>

    )
}

