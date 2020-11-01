import React from 'react'
import { Bolder } from '../../../../../../General/Constants/Text/Bolder'
import { Title2 } from '../../../../../../General/Constants/Text/Title2'
import { Title3 } from '../../../../../../General/Constants/Text/Title3'

interface IProps{
    enable : boolean,
    children : any
}

export const TrainingHeaderElement = ({enable, children} : IProps) => {
    return (
        <div>
            {

                enable ? (
                    <Title2 style={{marginRight: "2rem"}}><Bolder>{children}</Bolder></Title2>
                ) : (
                    <Title3 style={{marginRight: "2rem"}} color="secondary">{children}</Title3>
                )

            }
        </div>
    )
}
