import React, {useEffect} from 'react'
import { Container } from 'react-bootstrap'
import { Bolder } from '../../../General/Constants/Text/Bolder'
import { Paragraph } from '../../../General/Constants/Text/Paragraph'
import { Title1 } from '../../../General/Constants/Text/Title1'
import { Title3 } from '../../../General/Constants/Text/Title3'
import { Title4 } from '../../../General/Constants/Text/Title4'

import { useDispatch, useSelector } from 'react-redux'
import { Link, useRouteMatch } from 'react-router-dom'
import { getArticles } from '../../../../Store/articles'
import ReactHtmlParser  from 'react-html-parser';
import useThemes from '../../../../CustomHooks/useThemes'
import { FaArrowLeft } from 'react-icons/fa'
import { motion } from 'framer-motion'
export const Article = () => {


    const urlParams = useRouteMatch<any>().params.id;
    const dispatch = useDispatch()
    const loading = useSelector((state : any) => state.articles.loading)
    const articles = useSelector((state : any) => state.articles.list.find((x : any) => x.id == urlParams ))
    const theme = useThemes();

    useEffect( () => {

        dispatch(getArticles())

    }, [])

    const styles = {

        image: {

            borderRadius: "20px",
            width: "100%",
            objectFit: "cover",
            minHeight: "200px",
            height: "100%"

        } as React.CSSProperties


    }

    console.log(articles)

    if(!articles){
        return <div>No existe</div>
    }



    return (
        <Container className ="mt-5">

        <Link to="/home">
            <motion.div
            
                        whileHover={{ x: -10.05 }}


            className="d-flex mb-4 " style={{cursor: "pointer"}}>
                <FaArrowLeft color={theme.colors.textPrimary} size={25} style={{marginRight: 20}}/>
                <Title3>Volver atrás</Title3>
            </motion.div>
            <Title1><Bolder>{articles.title}</Bolder></Title1>
        </Link>
            <div style={{width: "100%", justifyContent: "center", display: "flex", marginTop: 30}}>
                <img src={articles.image} width="100%"  height={350} style={{objectFit: "cover", borderRadius: 20}}></img>
            </div>

            <div className="mt-5" style={{color: theme.colors.textPrimary}}>{ReactHtmlParser(articles.texto)}</div>
        </Container>
    )
}
