import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaComment } from 'react-icons/fa'
import { Icon } from '../../General/Constants/Icons/Icon'
import { Bolder } from '../../General/Constants/Text/Bolder'
import { Title1 } from '../../General/Constants/Text/Title1'
import { Title2 } from '../../General/Constants/Text/Title2'
import { Title3 } from '../../General/Constants/Text/Title3'
import ContainerBox from '../../General/Containers/ContainerBox'

export const Home = () => {
    return (
        
        <Container fluid>

            
            <Title1><Bolder>Bienvenido de nuevo,</Bolder> Jose</Title1>

            <Row>


                <Col md={5}>

                    <ContainerBox><Title3>Helloasdfffffffffasdfasdfsadfsadfsdafsasadfsadfasdfasdfasdfffffffffffffffffffffff dasfffffffffffff asdfaaaa</Title3></ContainerBox>
                
                </Col>

                <Col md={7}>

                    <ContainerBox><Title3>Helloasdfffffffffasdfasdfsadfsadfsdafsasadfsadfasdfasdfasdfffffffffffffffffffffff dasfffffffffffff asdfaaaa</Title3></ContainerBox>
               
                </Col>


            </Row>

        </Container>
    )
}

