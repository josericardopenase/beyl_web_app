import React, { useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { getFoodOfGroup, reorderFood } from '../../../../../Store/Diets/dietFoods'
import { getExcersiseOfGroup, reorderExcersise } from '../../../../../Store/Rutines/rutineExcersise'
import { reorderGroup } from '../../../../../Store/Rutines/rutineGroups'
import { Group } from '../../../../../Types/Types'
import Loading from '../../../../General/Constants/Loading/Loading'
import { DietFood } from '../../Pages/Diet/Components/DietFood'
import MacroCounter from '../../Pages/Diet/Components/MacroCounter'
import { RutineExcercise } from '../../Pages/Rutine/Components/RutineExcercise'
import AddExcersise from '../Modal/AddExcersise'
import AddFood from '../Modal/AddFood'
import { TrainingList } from './TrainingList'

interface props {
    obj : Group,
    index : number
}

export default function DietList({obj , index} : props) {


    const dispatch = useDispatch();
    const loading =useSelector((state : any) => state.training.diet.food.loading);
    const dietGroup = useSelector((state : any) => state.training.diet.food.list.filter((x : any) => x.group === obj.id));

    useEffect(() => {
       dispatch(getFoodOfGroup(obj.id)) 
    }, [])

    if(loading){
        return <Loading></Loading>
    }

    const protein = dietGroup.reduce((a : any, b : any) => a + (b.food.protein * (b.portion_cuantity / b.food.portion_weight)), 0);
    const carbs = dietGroup.reduce((a : any, b : any) => a + (b.food.carbohydrates * (b.portion_cuantity / b.food.portion_weight)), 0);
    const lips = dietGroup.reduce((a : any, b : any) => a + (b.food.fat * (b.portion_cuantity / b.food.portion_weight)), 0);
    const kcal =  dietGroup.reduce((a : any, b : any) => a + (b.food.kcalories * (b.portion_cuantity / b.food.portion_weight)), 0);

    console.log(dietGroup);

    return (
        <TrainingList rutine={false} onDragEnd={(action : any) => {
/*                 console.log(action.draggableId, store.getState().training.rutine.excersise.list[action.destination.index].order) */
                dispatch(reorderFood(parseInt(action.draggableId), action.destination.index))
        }} nameAdd = {"Agrega nuevo alimento"} id={obj.id} order={obj.order} index={index} name={obj.name} popUp = 
        {(modalShow, setModalShow, id) => <AddFood show={modalShow} id = {id} onHide={() => setModalShow()} ></AddFood>}
        >
            <MacroCounter fontSize={14} portion_cuantity={100} portion_weight={100} protein={protein} carbos={carbs} calories={kcal} grasas={lips} unity={"gr"}></MacroCounter>
            {

                dietGroup.map((x : any, index : number) => <DietFood obj={x} index={x.order}></DietFood>)

            }
        </TrainingList>
    )
}
