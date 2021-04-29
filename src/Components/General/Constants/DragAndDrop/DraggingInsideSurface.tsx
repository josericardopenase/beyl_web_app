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

export default function DraggingInsideSurface({children, onDragEnd, style, className, direction, final} : props) {


    const reordering = useReorderingFunction();


    return (
            <Droppable droppableId="droppable" direction={direction ? direction : "vertical"}>
            {
                (provided) => (

                    <div style={{...style}} className={className} {...provided.droppableProps} ref={provided.innerRef}>
                        {
                            children
                        }
                        <div style={{display: 'none', border: "3px red solid"}}>{provided.placeholder}</div>
                        {final}
                    </div>

                )
            } 
            </Droppable>
    )
}
