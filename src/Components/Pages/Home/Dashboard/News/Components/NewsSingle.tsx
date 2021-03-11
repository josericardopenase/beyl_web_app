import { motion } from 'framer-motion'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Stars } from '../../../../../General/Constants/GeneralPropose/Stars'
import { Bolder } from '../../../../../General/Constants/Text/Bolder'
import { Paragraph } from '../../../../../General/Constants/Text/Paragraph'
import { Title2 } from '../../../../../General/Constants/Text/Title2'
import { Title3 } from '../../../../../General/Constants/Text/Title3'
import { Title5 } from '../../../../../General/Constants/Text/Title5'
import ContainerBox from '../../../../../General/Containers/ContainerBox'

interface props {
    id: any,
    stars: number,
    title: string,
    excerpt: string,
    date: string,
    author: string
    image: string,
    texto: string
}

export const NewsSingle = ({id, stars, title, texto, date, author, image} : props) => {
    
    
    const styles = {

        image: {

            borderRadius: "20px",
            width: "100%",
            objectFit: "cover",
            minHeight: "200px",
            height: "100%"

        } as React.CSSProperties

    }
    
    
    return (

            <Col sm ={12} md={6} lg={6} xl={4}  className="mt-3 mt-md-3 mt-lg-3 p-2 d-flex align-items-stretch">

                <motion.div 
                
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.9 }}
                className="d-flex align-items-stretch"


                >
                <Link to={`home/article/${id}`} className="d-flex align-items-stretch">
                    <ContainerBox className="d-flex align-items-stretch">
                        <Row className="align-items-stretch d-flex">

                            <Col sm = {5}>
                            
                                <img src={image} style={styles.image}></img>
                            
                            </Col>

                            <Col style={{wordBreak: "break-word"}} className="mt-3 mt-sm-0 align-items-center d-flex">

                                <div>
                                    <Title2 style={{marginBottom: 10}}><Bolder>{title}</Bolder></Title2>
                                    
                                    <Stars number = {stars}></Stars>
                                </div>
                            </Col>


                        </Row>
                    </ContainerBox>
                </Link>
                </motion.div>   
        </Col>
    )
}
