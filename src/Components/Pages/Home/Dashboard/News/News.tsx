import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import apiBlog from '../../../../../Api/apiBlog'
import useApi from '../../../../../CustomHooks/useApi'
import useApiCallback from '../../../../../CustomHooks/useApiCallback'
import { ContainerBlockBox } from '../../../../General/Containers/ContainerBlockBox'
import { NewsSingle } from './Components/NewsSingle'

export const News = () => {


    return (
        <ContainerBlockBox title="Articulos de interes...">
            
            <Row>

            
                <NewsSingle key ={1} date="23-5-2001" author="tony garcia ruman" title={"Hola me cago en todo"} 
                excerpt={"hola me cago en dios"} image={""} stars={3}/>
            </Row>

        </ContainerBlockBox>
    )
}
