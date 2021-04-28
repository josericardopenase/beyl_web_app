import React from 'react'
import {Draggable, Droppable} from 'react-beautiful-dnd'

interface props{
    id: number,
    index: number,
    children : any,
    style ?: any
    className ?: any
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
        transform: `rotate(5deg)`,
        transition: `all 0.1s ease`,
        };

    }

    return style
  
    // patching the existing style
  }

export default function DraggingComponent({id, index, children, style, className} : props) {
    return (
        <Draggable key={id} draggableId={id.toString()} index ={index}>
            {(provided, snapshot) =>  (
                <div 
                style={getStyle(style, snapshot)}  
                className={className} 
                {...provided.draggableProps} 
                {...provided.dragHandleProps}
                ref={provided.innerRef} 
                >
                    <div style={getStyle(style, snapshot)}>
                    {
                        children
                    }
                    </div>
                </div>
                )
            }
        </Draggable>
    )
}
