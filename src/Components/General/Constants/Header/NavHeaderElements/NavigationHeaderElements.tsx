
import React from 'react'
import Themes from '../../../../General/Styles/Themes';
import {Title3} from '../../Text/Title3'
import {Bolder} from '../../Text/Bolder'

interface IProps{
    enable : boolean,
    children : any
}

export const NavigationHeaderElement = ({enable, children} : IProps) => {

    return (
        <div>
            {

                enable ? (
                    <div className="text-center mr-3 position-relative">
                        <div className="mt-1 position-absolute" style={{ width: "80%", height: "2px", borderRadius: "20px", backgroundColor: Themes.beylColor, bottom : -4}}/>
                        <Title3> <Bolder>{children}</Bolder></Title3>
                    </div>
                    
                ) : (
                    <Title3 style={{marginRight: "1rem"}} color="secondary">{children}</Title3>
                )

            }
        </div>
        
    )
}
