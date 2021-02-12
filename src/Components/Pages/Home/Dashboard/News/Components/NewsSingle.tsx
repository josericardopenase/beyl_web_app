import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Stars } from '../../../../../General/Constants/GeneralPropose/Stars'
import { Bolder } from '../../../../../General/Constants/Text/Bolder'
import { Paragraph } from '../../../../../General/Constants/Text/Paragraph'
import { Title2 } from '../../../../../General/Constants/Text/Title2'
import ContainerBox from '../../../../../General/Containers/ContainerBox'

interface props {
    id: any,
    stars: number,
    title: string,
    excerpt: string,
    date: string,
    author: string
    image: string
}

export const NewsSingle = ({id, stars, title, excerpt, date, author, image} : props) => {
    
    
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

            <Col sm ={12} md={6} lg={6} xl={4}  className="mt-3 mt-md-3 mt-lg-3 p-2 bigger-hover">
                <Link to={`home/article/${id}`}>
                    <ContainerBox>
                        <Row className="align-items-center">

                            <Col sm = {5}>
                            
                                <img src={image} style={styles.image}></img>
                            
                            </Col>

                            <Col style={{wordBreak: "break-word"}} className="mt-3 mt-sm-0 align-items-center">

                                <Title2 style={{marginBottom: 10}}><Bolder>{title}</Bolder></Title2>

                                <Paragraph color="secondary">{excerpt}</Paragraph>
                                
                                <Stars number = {stars}></Stars>
                            </Col>


                        </Row>
                    </ContainerBox>
                </Link>
            </Col>
    
    )
}
