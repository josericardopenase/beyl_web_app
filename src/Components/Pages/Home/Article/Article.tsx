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
export const Article = () => {


    const urlParams = useRouteMatch<any>().params.id;
    const dispatch = useDispatch()
    const loading = useSelector((state : any) => state.articles.loading)
    const articles = useSelector((state : any) => state.articles.list.find((x : any) => x.id == urlParams ))

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
            <Title1><Bolder>{articles.title}</Bolder></Title1>


                <div className="text-light mt-5 rich-text">{ReactHtmlParser(articles.texto)}</div>
        </Container>
    )
}
