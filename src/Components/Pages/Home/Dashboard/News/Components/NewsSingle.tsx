import { motion } from 'framer-motion'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Stars } from '../../../../../General/Constants/GeneralPropose/Stars'
import { Bolder } from '../../../../../General/Constants/Text/Bolder'
import { Paragraph } from '../../../../../General/Constants/Text/Paragraph'
import { Title2 } from '../../../../../General/Constants/Text/Title2'
import { Title3 } from '../../../../../General/Constants/Text/Title3'
import { Title4 } from '../../../../../General/Constants/Text/Title4'
import { Title5 } from '../../../../../General/Constants/Text/Title5'
import ContainerBox from '../../../../../General/Containers/ContainerBox'
import ProfilePicIcon from '../../../../../../Components/General/Constants/Icons/ProfilePicIcon'

interface props {
    id: any,
    stars: number,
    title: string,
    excerpt: string,
    date: string,
    author: any,
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

                            <Col style={{wordBreak: "break-word"}} className="mt-3 mt-sm-0 align-items-stretch d-flex">

                                <div className="d-flex flex-column align-items-between justify-content-between pt-3 pb-3">
                                    <div>
                                        <Title3 style={{marginBottom: 10}}><Bolder>{title}</Bolder></Title3>
                                        <Title4 color="secondary">{texto.replace(/<[^>]*>?/gm, '').slice(0, 70)}...</Title4>
                                    </div>
                                    {
                                    author ? 
                                        <div className="d-flex flex-row align-items-center">
                                            <ProfilePicIcon size={30} url={author.profile_pic}/>
                                            <div className="ml-3">
                                                <Title4 style={{marginBottom: 2}}><Bolder>{author.first_name} {author.last_name}</Bolder></Title4>
                                                <Title5 color="secondary">12. nov 2020</Title5>
                                            </div>
                                        </div>
                                    :
                                    null
                                    }

                                </div>
                            </Col>


                        </Row>
                    </ContainerBox>
                </Link>
                </motion.div>   
        </Col>
    )
}
