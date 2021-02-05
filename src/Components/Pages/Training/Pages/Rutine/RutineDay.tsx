import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';
import DraggingSurface from '../../../../General/Constants/DragAndDrop/DraggingSurface';
import { Title2 } from '../../../../General/Constants/Text/Title2';
import { AddList } from '../../Components/Common/AddList';
import { TrainingList } from '../../Components/List/TrainingList';
import { RutineExcercise } from './Components/RutineExcercise';
import VerticallyCenteredModal from '../../../../General/Constants/Modals/VerticallyCenteredModal'
import AddExcersise from '../../Components/Modal/AddExcersise';
import RutineList from '../../Components/List/RutineList';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { getGroupsOfDay, postRutineGroup, reorderGroup } from '../../../../../Store/Rutines/rutineGroups';
import reorder from '../../../../../Store/Utils/reorder';

export const RutineDay = (props : any) => {

    const rutineDay = props.match.params.rutineDay;
    const data = useRouteMatch()

    const store = useStore()
    const dispatch = useDispatch();
    const rutineGroup = useSelector((state : any) => state.training.rutine.group);

    useEffect(() => {
       dispatch(getGroupsOfDay(rutineDay)) 
    }, [rutineDay])

    if(rutineGroup.loading){
        return <div> loading</div>
    }

    return (
    
        <div  className="flex-nowrap m-0 p-0" style={{overflowX: 'auto', whiteSpace : "nowrap"}}>
                <DraggingSurface direction="horizontal" className="row flex-nowrap m-0 p-0" style={{overflowX: 'auto', whiteSpace : "nowrap", width: "100%"}} 
                final={ 
                    <AddList onClick={() => dispatch(postRutineGroup({day : rutineDay}))} styleText = {{padding: "0px 10px 0px 10px"}} text={"Añade lista de ejercicios"}></AddList>
                }

                onDragEnd={
                    (action : any)=> {
                            console.log(action)
                            dispatch(reorderGroup(parseInt(action.draggableId), store.getState().training.rutine.group.list[action.destination.index].order))
                    }

                }
                
                
                >

                        {
                            rutineGroup.list.map((x: any, index : number) => 
                                <RutineList key={x.id} obj={x} index = {index}></RutineList>
                            
                            )
                        }

                </DraggingSurface>

        </div>
    )
}
