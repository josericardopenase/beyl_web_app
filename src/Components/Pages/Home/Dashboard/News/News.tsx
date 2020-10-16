import React from 'react'
import { Row } from 'react-bootstrap'
import { ContainerBlockBox } from '../../../../General/Containers/ContainerBlockBox'
import { NewsSingle } from './Components/NewsSingle'

export const News = () => {
    return (
        <ContainerBlockBox title="Articulos de interes...">
            
            <Row>


                <NewsSingle key ={1} date="23-5-2001" author="tony garcia ruman" title="Diferentes Tipos de agarre press  de banca" 
                excerpt="El agarre del press de banca es fundamental a la hora de realizar los ejercicios..." image="https://static3.abc.es/media/bienestar/2019/09/18/entrenador-personal-U303043078655IEC--620x349@abc.jpg" stars={3}/>



                <NewsSingle key ={2}  date="23-5-2001" author="tony garcia ruman" title="Diferentes Tipos de agarre press  de banca" 
                excerpt="El agarre del press de banca es fundamental a la hora de realizar los ejercicios..." image="https://static3.abc.es/media/bienestar/2019/09/18/entrenador-personal-U303043078655IEC--620x349@abc.jpg" stars={4}/>



                <NewsSingle key ={3}  date="23-5-2001" author="tony garcia ruman" title="Diferentes Tipos de agarre press  de banca" 
                excerpt="El agarre del press de banca es fundamental a la hora de realizar los ejercicios..." image="https://static3.abc.es/media/bienestar/2019/09/18/entrenador-personal-U303043078655IEC--620x349@abc.jpg" stars={2}/>

            </Row>

        </ContainerBlockBox>
    )
}
