import React, { useState } from 'react'
import VerticallyCenteredModal from './VerticallyCenteredModal'
import Button1 from '../Button/Button1'

interface props{
    children : any[],
    title : string,
    onFinish ?: () => any,
    show : boolean,
    onHide ?: () => any,
    setSlide : any,
    slide : any,
    canSlide ?: () => boolean,
    resetForm : () => void;
}


export default function MultipleModal({title, onFinish, children, show, onHide,  setSlide, slide, canSlide, resetForm} : props) {


    const [index, setIndex] = [slide, setSlide];

    const nextSlide = () => {
        if(onFinish){
            onFinish()
        }

        if(canSlide)
            if(canSlide() === false)
                return;

        if(index < children.length - 1){
            setIndex(index + 1)
        }


    }

    const backSlide = () => {
        if(index > 0){
            setIndex(index - 1)
            resetForm()
        }
        
    }

    return (
        <VerticallyCenteredModal size="lg" onHide = {() => { if(onHide) {onHide(); } }  } show={show} title={title}
        
        footer = {
            <div className = { index > 0 ? "justify-content-between d-flex w-100" : ""}>
                { index > 0 ? <Button1 onClick = {backSlide}>Anterior</Button1> : null}
                <Button1 onClick = {() => {nextSlide(); }}>{index < children.length - 1 ? "Siguiente" : "Terminar" }</Button1>
            </div>
        }
        
        >

        {
            children[index]
        }
            
        </VerticallyCenteredModal>
    )
}
