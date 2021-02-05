import React from 'react'
import {Draggable, Droppable} from 'react-beautiful-dnd'

interface props{
    id: number,
    index: number,
    children : any,
    style ?: any
    className ?: any
}

export default function DraggingComponent({id, index, children, style, className} : props) {
    return (
        <Draggable key={id} draggableId={id.toString()} index ={index}>
            {(provided) =>  (
                <div style={style} className={className} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                    {
                        children
                    }

                </div>
                )
            }
        </Draggable>
    )
}
