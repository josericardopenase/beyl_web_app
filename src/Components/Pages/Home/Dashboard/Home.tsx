import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaComment } from 'react-icons/fa'
import { Bolder } from '../../../General/Constants/Text/Bolder'
import { Title1 } from '../../../General/Constants/Text/Title1'
import { ContainerBlockBox } from '../../../General/Containers/ContainerBlockBox'
import ContainerMarginTop from '../../../General/Containers/ContainerMarginTop'
import { News } from './News/News'
import LastUpdates from './Resummy/LastUpdates'
import ClientsGraph from './Resummy/ClientsGraph'
import { useSelector } from 'react-redux'
import Loading from '../../../General/Constants/Loading/Loading'


export const Home = () => {


    const athlete = useSelector((state : any) => state.auth.user )
    

    if(!athlete)
        return <Loading></Loading>


    return (
        
        <ContainerMarginTop>        
            

            <Title1><Bolder>Bienvenido de nuevo,</Bolder> {athlete.user.first_name}</Title1>


            {/* Noticias display */}
            <News></News>

            <ContainerBlockBox title={"Información"}>

                <Row>
                    <LastUpdates></LastUpdates>
                    <ClientsGraph></ClientsGraph>

                </Row>

            </ContainerBlockBox>
            




        </ContainerMarginTop>

    )
}

