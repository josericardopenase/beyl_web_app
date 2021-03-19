import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';
import DraggingSurface from '../../../../General/Constants/DragAndDrop/DraggingSurface';
import { Title2 } from '../../../../General/Constants/Text/Title2';
import { AddList } from '../../Components/Common/AddList';
import { TrainingList } from '../../Components/List/TrainingList';
import VerticallyCenteredModal from '../../../../General/Constants/Modals/VerticallyCenteredModal'
import AddExcersise from '../../Components/Modal/AddExcersise';
import RutineList from '../../Components/List/RutineList';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { getGroupsOfDay, postRutineGroup, reorderGroup } from '../../../../../Store/Rutines/rutineGroups';
import reorder from '../../../../../Store/Utils/reorder';
import { getDietDaysOfDiet } from '../../../../../Store/Diets/dietDays';
import { getDietGroupsOfDay, postDietGroup, reorderDietGroup } from '../../../../../Store/Diets/dietGroups';
import DietList from '../../Components/List/DietList';
import { Title5 } from '../../../../General/Constants/Text/Title5';
import { Title3 } from '../../../../General/Constants/Text/Title3';
import Themes from '../../../../General/Styles/Themes';
import useThemes from '../../../../../CustomHooks/useThemes';
import { Title4 } from '../../../../General/Constants/Text/Title4';
import { MetabolismoBasal } from '../../../../General/Constants/functions/DietFunctions';
import Loading from '../../../../General/Constants/Loading/Loading';
import FoodMacrosChart from './Components/FoodMacrosChart';

export const DietDay = (props : any) => {

    const dietDay = props.match.params.dietDay;
    const data = useRouteMatch()
    const theme= useThemes()

    const store = useStore()
    const dispatch = useDispatch();
    const dietGroup = useSelector((state : any) => state.training.diet.DietGroup);
    const dietFoods = useSelector((state : any) => state.training.diet.food.list.filter((x : any) => dietGroup.list.some((e : any) => e.id === x.group)));
    const athlete = store.getState().athletes.selectedAthlete



    useEffect(() => {

       dispatch(getDietGroupsOfDay(dietDay)) 

    }, [dietDay])

    if(dietGroup.loading){
        return <Loading></Loading>
    }


    function calculateTotalGr(num : number , portion_cuantity: number, portion_weight: number) : number{
         const magic_number : number = (Math.round((portion_cuantity / portion_weight) * 10) / 10)
         return num * magic_number
    }

    const kcal = dietFoods.reduce((a : any, b : any) => a + calculateTotalGr(b.food.kcalories, b.portion_cuantity, b.food.portion_weight), 0 ).toFixed(1)
    const protein = dietFoods.reduce((a : any, b : any) => a + calculateTotalGr(b.food.protein, b.portion_cuantity, b.food.portion_weight), 0 ).toFixed(1)
    const carbs = dietFoods.reduce((a : any, b : any) => a + calculateTotalGr(b.food.carbohydrates, b.portion_cuantity, b.food.portion_weight), 0 ).toFixed(1)
    const lips = dietFoods.reduce((a : any, b : any) => a + calculateTotalGr(b.food.fat, b.portion_cuantity, b.food.portion_weight), 0 ).toFixed(1)
    const basalMetabolism =  MetabolismoBasal(athlete.weight, athlete.height, athlete.age, athlete.sexo, athlete.amount_excersise);


    return (
    
        <div  className="flex-nowrap p-0" style={{overflowX: 'auto', whiteSpace : "nowrap",  marginBottom: "50px"}}>


            
                    <div className="d-flex mb-3 text-center align-items-center"style={{backgroundColor: theme.colors.primary, padding: "1rem", borderRadius: 10, width: "fit-content"}}>

                        <div className="text-left">

                            <Title4>Metabolismo basal actual</Title4>
                            <div className="d-flex align-items-center" style={{marginTop: 5}}>
                                <Title3  color={"#F5A623"}>{basalMetabolism} kcal</Title3>
                                <Title4 style={{marginLeft: 10}} color={basalMetabolism - kcal >= 0 ? "#22A447" : "#FD413C"}>({basalMetabolism - kcal < 0 ? "+" + ((Math.abs(basalMetabolism - kcal)).toFixed(1)) : "-" + (basalMetabolism - kcal).toFixed(1)})</Title4>

                            </div>
                        </div>

                        <div style={{height: "3rem", width: 1, backgroundColor: theme.colors.textSecondary, marginLeft: 20}}></div>


                        <FoodMacrosChart width={100} height={100} innerRadius={20} outerRadius={30} actualWeight={100} food={{ food : {carbohydrates : carbs, fat : lips, protein : protein, kcalories: kcal, portion_weight: 100}}}></FoodMacrosChart>

                        <div className="ml-2 text-center mr-2">
                            <Title3 color="#FD413C">
                                {
                                   protein 
                                } gr
                            </Title3>
                            <Title4 style={{marginTop: 5}}>Proteínas</Title4>
                        </div>
                        <div className="ml-5 mr-2">
                            <Title3 color="#FFDD68">
                                {
                                   carbs 
                                } gr
                            </Title3>
                            <Title4 style={{marginTop: 5}}>Hidratos</Title4>
                        </div>
                        <div className="ml-5 mr-2">
                            <Title3 color="#22A447">
                                {
                                   lips 
                                } gr
                            </Title3>
                            <Title4 style={{marginTop: 5}}>Grasas</Title4>
                        </div>
                        <div className="ml-5 mr-4">
                            <Title3 color="#F5A623">
                                {
                                   kcal 
                                }
                            </Title3>
                            <Title4 style={{marginTop: 5}}>Kcal</Title4>
                        </div>
                    </div>
                <DraggingSurface direction="horizontal" className="row flex-nowrap m-0 p-0" style={{overflowX: 'auto', whiteSpace : "nowrap", width: "100%"}} 
                final={ 
                    <AddList onClick={() => dispatch(postDietGroup({name : "Comida nueva" , day : dietDay}))} styleText = {{padding: "0px 10px 0px 10px"}} text={"Añade nueva comida"}></AddList>
                }

                onDragEnd={
                    (action : any)=> {
                            console.log(action)
                            dispatch(reorderDietGroup(parseInt(action.draggableId), action.destination.index))
                    }

                }
                
                
                >

                        {
                            dietGroup.list.map((x: any, index : number) => 
                                <DietList key={x.id} obj={x} index = {index}></DietList>
                            
                            )
                        }

                </DraggingSurface>

        </div>
    )
}
