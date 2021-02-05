import { useDispatch, useStore } from "react-redux"
import React, {useState, useEffect} from 'react'
import { patchDay } from "../Store/Rutines/rutineDays"


export default function useReorderingFunction(){

    const dispatch = useDispatch<any>()
    const store = useStore()

    const reorder = (action : any) => {
        console.log(action)

        const magicNumber = 2**16 

        const element = action.draggableId

        const from = action.source.index;
        const to = action.destination.index;

        console.log(Math.abs(from-to))

        if(Math.abs(from - to) == magicNumber){

            dispatch(patchDay({id: element, order :to}))
            dispatch(patchDay({order : from}))

        }

        console.log("finished")


        
    }

    return {reorder}

}