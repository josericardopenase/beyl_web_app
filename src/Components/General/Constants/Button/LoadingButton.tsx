import React from 'react'
import ContainerBox from '../../Containers/ContainerBox'
import Themes from '../../Styles/Themes'
import { Title4 } from '../Text/Title4'

export default function LoadingButton({onClick} : any) {
    return (

        <div onClick={onClick} className="mt-3" style={{cursor : "pointer"}}>
            <ContainerBox>

                <Title4 color={Themes.beylColor} style={{textAlign: "center"}}>Cargar más</Title4>
            </ContainerBox>
        </div>


    )
}
