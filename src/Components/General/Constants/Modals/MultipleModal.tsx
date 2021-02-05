import React, { useState } from 'react'
import VerticallyCenteredModal from './VerticallyCenteredModal'
import Button1 from '../Button/Button1'

interface props{
    children : any[],
    title : string,
    onFinish ?: () => any,
    show : boolean,
    onHide ?: () => any
}


export default function MultipleModal({title, onFinish, children, show, onHide} : props) {


    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        if(index < children.length - 1){
            setIndex(index + 1)
        }else{
            if(onFinish){
                onFinish()
                setIndex(0)
            } 
        }
    }

    const backSlide = () => {
        if(index > 0){
            setIndex(index - 1)
        }
        
    }

    return (
        <VerticallyCenteredModal onHide = {() => { if(onHide) {onHide(); } setIndex(0) }  } show={show} title={title}
        
        footer = {
            <div className = { index > 0 ? "justify-content-between d-flex w-100" : ""}>
                { index > 0 ? <Button1 onClick = {backSlide}>Anterior</Button1> : null}
                <Button1 onClick = {nextSlide}>{index < children.length - 1 ? "Siguiente" : "Terminar" }</Button1>
            </div>
        }
        
        >

        {
            children[index]
        }
            
        </VerticallyCenteredModal>
    )
}
