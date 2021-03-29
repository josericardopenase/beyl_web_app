import { useFormikContext } from 'formik'
import React, { useState } from 'react'
import { FaFire } from 'react-icons/fa'
import { Icon } from '../../Icons/Icon'



interface IProps{
    name : string,
    size ?: number,
}

export default function FormikExcersisePuntuation({size, name} : IProps) {

    const formik = useFormikContext()
    const [puntuation, setPuntuation] = useState<number>(1);

    return (
        <div className="d-flex mt-3 mb-4">
            {
                [0,1,2,3,4].map((value, index) =>  (
                        <Icon color={index >= puntuation ? "grey" : "#ff4567"}>
                            <FaFire onClick={() => {setPuntuation(index + 1); formik.setFieldValue(name, index + 1); }} size={size ? size : 20}></FaFire>
                        </Icon>    
                ))
            }
        </div>
    )
}
