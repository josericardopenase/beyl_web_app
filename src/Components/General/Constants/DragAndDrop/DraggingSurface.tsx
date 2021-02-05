import React from 'react'
import { Droppable, DragDropContext } from 'react-beautiful-dnd'
import useReorderingFunction from '../../../../CustomHooks/useReorderingFunction'

enum direction {
    "vertical",
    "horizontal"
}

interface props {
    children : any,
    onDragEnd ?: any,
    style ?: any,
    className ?: any,
    direction ? : any,
    final ?: any
}

export default function DraggingSurface({children, onDragEnd, style, className, direction, final} : props) {


    const reordering = useReorderingFunction();


    return (
        <DragDropContext 
                onDragEnd = {(action: any) => {
                    if(action.destination != null)
                        if(action.destination.index != null && action.source.index != null){
                            if (action.destination.index !== action.source.index){
                                onDragEnd(action)
                            }
                    
                        }
                    }
            } 
        >

            <Droppable droppableId="droppable" direction={direction ? direction : "vertical"}>
            {
                (provided) => (

                    <div style={{...style}} className={className} {...provided.droppableProps} ref={provided.innerRef}>
                        {
                            children
                        }
                        {provided.placeholder}
                        {final}
                    </div>

                )
            } 
            </Droppable>
        </DragDropContext>
    )
}
