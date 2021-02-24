import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { FaCross, FaRegTimesCircle, FaTimesCircle, FaTrashAlt } from 'react-icons/fa'
import ButtonMain from '../Button/ButtonMain'
import VerticallyCenteredModal from '../Modals/VerticallyCenteredModal'
import { Icon } from './Icon'


interface IProps{
    onClick : () => any,
    popUp ?: boolean,
    color ?: string,
    size ?: number,
}

export default function RemoveIcon({onClick, popUp, color, size} : IProps) {


    const [open, setOpen] = useState<boolean>(false)

    return (
        <>

            <div onClick={() => popUp ? setOpen(true) : onClick() } style={{zIndex: 300, cursor: "pointer"}}>
                <Icon color={color }>
                    <FaTrashAlt  size={size}></FaTrashAlt>
                </Icon>
            </div>

            <VerticallyCenteredModal show={open} onHide={() => setOpen(false)} title=" " footer={
                
                    <div className="d-flex justify-content-center w-100">
                        <Button onClick={() => setOpen(false)} variant="secondary" className="mr-3">Cancelar</Button>
                        <Button variant="danger" onClick={() => { onClick(); setOpen(false);}}>Eliminar</Button>
                    </div>
                
            }>
                <div className="d-flex flex-column w-100 justify-content-center align-items-center text-center">
                    <FaRegTimesCircle size={120} color="#dc3545" className="mb-4"></FaRegTimesCircle>
                    <h3>¿Estas seguro?</h3>
                    <p className="mt-3">De verad quieres eliminar este registro? No podras volver a recuperarlo</p>
                </div>
            </VerticallyCenteredModal>

        </>
    )
}
