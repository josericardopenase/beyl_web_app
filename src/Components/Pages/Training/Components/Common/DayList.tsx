import React, { useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { getDaysOfRutine, patchDay, postDay, reorderDay } from '../../../../../Store/Rutines/rutineDays'
import DraggingSurface from '../../../../General/Constants/DragAndDrop/DraggingSurface'
import { Title2 } from '../../../../General/Constants/Text/Title2'
import { Title4 } from '../../../../General/Constants/Text/Title4'
import { AddList } from './AddList'
import { Day } from './Day'

interface IProps{
    matchId: any
}

export const DayList = ({days, rutine} : any) => {

    const dispatch = useDispatch()
    const store  = useStore()

    const listDays = useSelector((state : any) => state.training.rutine.days.list.filter((obj : any) => obj.rutine === state.athletes.selectedAthlete.trainer_rutine))
    const loading = useSelector((state : any) => state.training.rutine.days.loading)

    useEffect(() => {

        dispatch(getDaysOfRutine(store.getState().athletes.selectedAthlete.trainer_rutine))

    }, [])

    if(loading)
        return <div>loading</div>
 
    return (
        <DraggingSurface className="d-flex mt-3 mb-3 align-items-center text-nowrap overflow-auto pb-3" direction={"horizontal"} style={{whiteSpace : "no-wrap", overflow: "auto"}} 
        final={ <AddList text={"Añadir día"} onClick={() => dispatch(postDay({name : "Dia nuevo", rutine : store.getState().athletes.selectedAthlete.trainer_rutine}))}></AddList>}
        
        
                onDragEnd = {(action: any) => {
                    if(action.destination != null)
                        if(action.destination.index != null && action.source.index != null){
                            if (action.destination.index !== action.source.index){
                                dispatch(reorderDay(parseInt(action.draggableId), store.getState().training.rutine.days.list[action.destination.index].order))
                            }
                    
                        }
                    }
            } 
        >

            {
                listDays.map((obj : any, index : any) => <Day index={index} key={obj.id} day={obj}></Day>)
            }
            

       </DraggingSurface>
    )
}
