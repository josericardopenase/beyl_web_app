import React from 'react'
import { Title2 } from '../../../../../General/Constants/Text/Title2'
import { TrainingHeaderElement } from './Components/TrainingHeaderElement'

export const TrainingHeader = () => {
    return (
        <div className="mt-4 d-flex align-items-end">
            
            <TrainingHeaderElement enable={true}>General</TrainingHeaderElement>
            <TrainingHeaderElement enable={false}>Rutina</TrainingHeaderElement>
            <TrainingHeaderElement enable={false}>Dieta</TrainingHeaderElement>


        </div>
    )
}
