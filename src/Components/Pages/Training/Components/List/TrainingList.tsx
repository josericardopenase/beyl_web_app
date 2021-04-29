import React, { useContext, useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import ThemeContext from '../../../../../Store/Themes/ThemeContext'
import { Title3 } from '../../../../General/Constants/Text/Title3';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import DraggingSurface from '../../../../General/Constants/DragAndDrop/DraggingSurface';
import DraggingComponent from '../../../../General/Constants/DragAndDrop/DraggingComponent';
import { FaAutoprefixer, FaTrashAlt } from 'react-icons/fa';
import TitleInput from '../../../../General/Constants/Text/interactable/TitleInput';
import { AddList } from '../Common/AddList';
import VerticallyCenteredModal from '../../../../General/Constants/Modals/VerticallyCenteredModal';
import AddExcersise from '../Modal/AddExcersise';
import { useDispatch } from 'react-redux';
import { patchRutineGroup, deleteRutineGroup } from '../../../../../Store/Rutines/rutineGroups'
import { Icon } from '../../../../General/Constants/Icons/Icon';
import RemoveIcon from '../../../../General/Constants/Icons/RemoveIcon';
import { Bolder } from '../../../../General/Constants/Text/Bolder';
import { deleteDietGroup, patchDietGroup } from '../../../../../Store/Diets/dietGroups';
import Themes from '../../../../General/Styles/Themes';

interface props {
    name: string,
    children: any,
    id: number,
    order: number,
    nameAdd : string,
    changeName ?: any,
    popUp : (showModal : any, toggleModal : any, id : number) => any,
    onDragEnd ?: any,
    rutine: boolean,
    index : number
}

export const TrainingList = ({name, children, id, order, popUp, nameAdd, onDragEnd, rutine, index} : props) => {


    const theme = useContext(ThemeContext);


    const [modalShow, setModalShow] = useState(false);
    const [hover, setHover] = useState(false)

    const dispatch = useDispatch();

    const style = {
        container : {
            backgroundColor: theme.colors.secondary,
            borderRadius: "30px",
            width: 350,
            height: "auto",
            transition: "0.3s all ease",
        } as React.CSSProperties
    }

    function modifyName(newName : string){
        if(rutine){

            dispatch(patchRutineGroup({id : id, name : newName}))
        }else{
            dispatch(patchDietGroup({id : id, name : newName}))
        }
    }


function getStyle(style : any, snapshot : any) {


    if(snapshot.isDropAnimating){
        const { moveTo, curve, duration } = snapshot.dropAnimation;
        // move to the right spot

        return {
        ...style,
        transform: `rotate(0deg)`,
        // slowing down the drop because we can

        };
    }

    console.log(snapshot.isDragging)

    if(snapshot.isDragging){


        return {
        ...style,
        transform: `scale(1.04)`,
        transition: `all 0.1s ease`,
        };

    }

    return style
  
    // patching the existing style
  }
    return (
        
        
        <>
        <Draggable key={id} draggableId={id.toString()} index ={order}>
            {(provided, snapshot) =>  (
                <div   {...provided.draggableProps} ref={provided.innerRef}>
                    
                        <div style={{...style.container, border: hover || snapshot.isDragging ? `2px ${theme.colors.tertiary} solid` : `2px ${theme.colors.secondary} solid`, transform: snapshot.isDropAnimating ? "scale(1)" : snapshot.isDragging ?  "scale(1.10)" : ""}}  className="p-3 mr-3 mb-3">
            

                            <div className="w-100 d-flex justify-content-between mouse-cursor align-items-center d-flex p-2" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{cursor: "pointer"}} {...provided.dragHandleProps}>

                                <div className="d-flex">

                                    <Title3 style={{marginRight: 10}} color={Themes.beylColor}><Bolder>{index + 1}</Bolder></Title3>
                                    <Bolder><TitleInput onChange={modifyName} className="w-100 mr-2">{name}</TitleInput></Bolder>
                                </div>
                                <RemoveIcon popUp={true} onClick={() => rutine ? dispatch(deleteRutineGroup(id)) : dispatch(deleteDietGroup(id))}></RemoveIcon>

                            </div>

                            <DraggingSurface onDragEnd={(action: any) => {
                                onDragEnd(action)
                            
                            }} final={
                                <AddList styleContainer = {{marginTop: 10}}  text={nameAdd} onClick = {() => setModalShow(true)}></AddList>
                            }>
                                <Row className="mt-1">
                                    {
                                    children
                                    }
                                </Row>

                            </DraggingSurface>
                        </div>
                    

                </div>
                )
            }



        </Draggable>
            {
                popUp(modalShow, () => setModalShow(false), id)
            }
        </>
    )
}
