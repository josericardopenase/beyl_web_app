import React, { useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { getDietDaysOfDiet, postDietDay, reorderDietDay } from '../../../../../Store/Diets/dietDays'
import { getDaysOfRutine, patchDay, postDay, reorderDay } from '../../../../../Store/Rutines/rutineDays'
import DraggingSurface from '../../../../General/Constants/DragAndDrop/DraggingSurface'
import Loading from '../../../../General/Constants/Loading/Loading'
import { Title2 } from '../../../../General/Constants/Text/Title2'
import { Title4 } from '../../../../General/Constants/Text/Title4'
import { AddList } from './AddList'
import { Day } from './Day'

interface IProps{
    matchId: any
}

export const DayList = ({rutine} : any) => {

    const dispatch = useDispatch()
    const store  = useStore()

    const listDays = useSelector((state : any) => rutine ? state.training['rutine'].days.list.filter((obj : any) => obj.rutine === state.athletes.selectedAthlete.trainer_rutine) : state.training['diet'].dietDays.list.filter((obj : any) => obj.diet === state.athletes.selectedAthlete.trainer_diet))
    const loading = useSelector((state : any) => rutine ?  state.training['rutine'].days.loading : state.training['diet'].dietDays.loading)

    useEffect(() => {

        if(rutine){
            dispatch(getDaysOfRutine(store.getState().athletes.selectedAthlete.trainer_rutine))
        }else{
            dispatch(getDietDaysOfDiet(store.getState().athletes.selectedAthlete.trainer_diet))
        }
    }, [])

    if(loading || !listDays)
        return <Loading></Loading>
 
    return (
        <DraggingSurface className="d-flex mt-3 mb-3 align-items-center text-nowrap overflow-auto pb-3" direction={"horizontal"} style={{whiteSpace : "no-wrap", overflow: "auto"}} 
        final={ <AddList text={"Añadir día"} onClick={() => rutine ? dispatch(postDay({name : "Dia nuevo", rutine : store.getState().athletes.selectedAthlete.trainer_rutine})) : dispatch(postDietDay({name : "Dia nuevo", diet : store.getState().athletes.selectedAthlete.trainer_diet}))}></AddList>}
        
        
                onDragEnd = {(action: any) => {
                    if(action.destination != null)
                        if(action.destination.index != null && action.source.index != null){
                            if (action.destination.index !== action.source.index){
                                if(rutine){
                                    dispatch(reorderDay(parseInt(action.draggableId),action.destination.index))
                                }else{
                                    dispatch(reorderDietDay(parseInt(action.draggableId), action.destination.index))
                                }
                            }
                    
                        }
                    }
            } 
        >

            {
                listDays.map((obj : any, index : any) => <Day rutine={rutine} index={index} key={obj.id} day={obj}></Day>)
            }
            

       </DraggingSurface>
    )
}
