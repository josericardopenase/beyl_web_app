import React from 'react'
import { Bolder } from '../../../../../General/Constants/Text/Bolder'
import { Title2 } from '../../../../../General/Constants/Text/Title2'
import { Title3 } from '../../../../../General/Constants/Text/Title3'
import Themes from '../../../../../General/Styles/Themes'


interface IProps{
    enable : boolean,
    children : any
}

export const TrainingHeaderElement = ({enable, children} : IProps) => {

    return (
        <div>
            {

                enable ? (
                    <div className="text-center mr-3 position-relative">
                        <Title3> <Bolder>{children}</Bolder></Title3>
                        <div className="mt-1 position-absolute" style={{ width: "80%", height: "2px", borderRadius: "20px", backgroundColor: Themes.beylColor, bottom : -4}}/>
                    </div>
                    
                ) : (
                    <Title3 style={{marginRight: "1rem"}} color="secondary">{children}</Title3>
                )

            }
        </div>
        
    )
}
