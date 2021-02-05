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
import { removeDietGroup } from '../../../../../Store/Diets/dietGroups';
import { Bolder } from '../../../../General/Constants/Text/Bolder';

interface props {
    name: string,
    children: any,
    id: number,
    order: number,
    nameAdd : string,
    changeName ?: any,
    popUp : (showModal : any, toggleModal : any, id : number) => any,
    onDragEnd ?: any
}

export const TrainingList = ({name, children, id, order, popUp, nameAdd, onDragEnd} : props) => {


    const theme = useContext(ThemeContext);

    const style = {
        container : {
            backgroundColor: theme.colors.secondary,
            border: `3px ${theme.colors.secondary} solid`,
            borderRadius: "20px",
            width: 400,
            height: "auto",
            transition: "height 1s linear"
        } as React.CSSProperties
    }

    const [modalShow, setModalShow] = useState(false);

    const dispatch = useDispatch();

    function modifyName(newName : string){
        dispatch(patchRutineGroup({id : id, name : newName}))
    }


    return (
        
        <>
        
            <DraggingComponent id ={id} index={order}>
                <div style={style.container} className="p-3 mr-3 mb-3">

                    <div className="w-100 d-flex justify-content-between">

                        <Bolder><TitleInput onChange={modifyName}>{name}</TitleInput></Bolder>
                        <RemoveIcon onClick={() => dispatch(deleteRutineGroup(id))}></RemoveIcon>

                    </div>

                    <DraggingSurface onDragEnd={(action: any) => {
                        onDragEnd(action)
                     
                    }} final={
                        <AddList styleContainer = {{marginTop: 10}}  text={nameAdd} onClick = {() => setModalShow(true)}></AddList>
                    }>
                        <Row className="mt-2">
                                {
                                children
                                }

                        </Row>

                    </DraggingSurface>
                </div>
            </DraggingComponent>


            {
                popUp(modalShow, () => setModalShow(false), id)
            }

        </>
    )
}
