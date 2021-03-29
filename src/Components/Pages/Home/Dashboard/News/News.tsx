import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector, useStore } from 'react-redux'
import apiBlog from '../../../../../Api/apiBlog'
import useApi from '../../../../../CustomHooks/useApi'
import useApiCallback from '../../../../../CustomHooks/useApiCallback'
import { ContainerBlockBox } from '../../../../General/Containers/ContainerBlockBox'
import { NewsSingle } from './Components/NewsSingle'
import { getArticles} from '../../../../../Store/articles'
import Loading from '../../../../General/Constants/Loading/Loading'

export const News = () => {

    const dispatch = useDispatch()
    const store =  useStore()
    const loading = useSelector((state : any) => state.articles.loading)
    const articles = useSelector((state : any) => state.articles.list)

    useEffect( () => {

        dispatch(getArticles())

    }, [])

    if(loading || articles.length === 0){
        return <Loading></Loading>
    }

    return (
        <ContainerBlockBox title="Artículos de interes">
            
            <Row className="align-items-stretch">

                { 
                    articles.map((obj : any) => <NewsSingle key ={obj.id} id={obj.id} date="23-5-2001" author={obj.author} title={obj.title} 
                    excerpt={""} image={obj.image} texto={obj.texto} stars={3}/>)
                }

            </Row>

        </ContainerBlockBox>
    )
}
