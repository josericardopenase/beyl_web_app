import React, { useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { getExcersiseOfGroup, reorderExcersise } from '../../../../../Store/Rutines/rutineExcersise'
import { reorderGroup } from '../../../../../Store/Rutines/rutineGroups'
import { Group } from '../../../../../Types/Types'
import Loading from '../../../../General/Constants/Loading/Loading'
import { RutineExcercise } from '../../Pages/Rutine/Components/RutineExcercise'
import AddExcersise from '../Modal/AddExcersise'
import { TrainingList } from './TrainingList'

interface props {
    obj : Group,
    index : number
}

export default function RutineList({obj , index} : props) {


    const dispatch = useDispatch();
    const loading =useSelector((state : any) => state.training.rutine.excersise.loading);
    const rutineGroup = useSelector((state : any) => state.training.rutine.excersise.list.filter((x : any) => x.group === obj.id));
    const store = useStore()

    useEffect(() => {
       dispatch(getExcersiseOfGroup(obj.id)) 
    }, [])

    if(loading){
        return <Loading></Loading>
    }

    return (
        <TrainingList rutine={true} onDragEnd={(action : any) => {
/*                 console.log(action.draggableId, store.getState().training.rutine.excersise.list[action.destination.index].order) */
                dispatch(reorderExcersise(parseInt(action.draggableId), action.destination.index))

        }} nameAdd = {"Agrega ejercicio"} id={obj.id} order={index} name={obj.name} popUp = {(modalShow, setModalShow, id) => <AddExcersise show={modalShow} id = {id} onHide={() => setModalShow()} ></AddExcersise>}>
            {

                rutineGroup.map((x : any, index : number) => <RutineExcercise obj = {x} index={x.order} key={x.id} ></RutineExcercise>)

            }
        </TrainingList>
    )
}
