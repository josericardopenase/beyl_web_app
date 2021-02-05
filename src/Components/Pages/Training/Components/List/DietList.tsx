import React from 'react'
import AddFood from '../Modal/AddFood'
import { TrainingList } from './TrainingList'

interface props {
    children : any
}

export default function DietList({children} : props) {
    return (
        <TrainingList nameAdd={"Agrega alimento o receta"} id={1} order={1} name="Desayuno" popUp = {(modalShow, setModalShow) => <AddFood show={modalShow} onHide={() => setModalShow()} ></AddFood>}>
        {
            children
        }            
        </TrainingList>
    )
}
