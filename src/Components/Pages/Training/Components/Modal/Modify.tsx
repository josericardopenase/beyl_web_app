import React from 'react'
import { Button } from 'react-bootstrap'
import Bottom1 from '../../../../General/Constants/Button/Button1'
import VerticallyCenteredModal from '../../../../General/Constants/Modals/VerticallyCenteredModal'


interface props {
    title : string,
    show : any,
    onHide : () => any,
    children : any
}

export default function Modify({title, show, onHide, children} : any) {
    return (
        <VerticallyCenteredModal title={title} show={show} onHide={onHide} footer={

               <>
                    <Button variant={"danger"}>Eliminar</Button>
                    <Bottom1>Modificar</Bottom1>
               </>

        }>
        {
            children
        }            

        </VerticallyCenteredModal>
    )
}
