import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';
import DraggingSurface from '../../../../General/Constants/DragAndDrop/DraggingSurface';
import { Title2 } from '../../../../General/Constants/Text/Title2';
import { AddList } from '../../Components/Common/AddList';
import { TrainingList } from '../../Components/List/TrainingList';
import { DietFood } from './Components/DietFood';
import VerticallyCenteredModal from '../../../../General/Constants/Modals/VerticallyCenteredModal'
import AddExcersise from '../../Components/Modal/AddExcersise';
import DietList from '../../Components/List/DietList';

export const DietDay = (props : any) => {

    const DietDay = props.match.params.rutineDay;
    const data = useRouteMatch()


    return (
    
        <Container fluid className="flex-nowrap m-0 p-0" style={{overflowX: 'auto', whiteSpace : "nowrap"}}>
                <DraggingSurface direction="horizontal" className="row flex-nowrap m-0 p-0" style={{overflowX: 'auto', whiteSpace : "nowrap", width: "100%"}} 
                final={ 
                    <AddList styleContainer={{padding: "0px 20px 0px 20px"}} styleText = {{padding: "0px 10px 0px 10px"}} text={"Añade nueva comida"}></AddList>
                }>

                    <DietList>

                            <DietFood obj = {{id: 1}} index={1} ></DietFood>         
                            <DietFood obj = {{id: 2}} index={2}></DietFood>         
                            <DietFood obj = {{id: 3}} index={3}></DietFood>         

                    </DietList>

                </DraggingSurface>

        </Container>
    )
}
