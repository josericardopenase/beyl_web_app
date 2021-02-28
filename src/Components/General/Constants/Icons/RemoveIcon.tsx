import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { FaCross, FaRegTimesCircle, FaTimesCircle, FaTrashAlt } from 'react-icons/fa'
import { BsXCircle } from 'react-icons/bs'
import useThemes from '../../../../CustomHooks/useThemes'
import ButtonMain from '../Button/ButtonMain'
import VerticallyCenteredModal from '../Modals/VerticallyCenteredModal'
import { Title5 } from '../Text/Title5'
import { Title4 } from '../Text/Title4'
import { Icon } from './Icon'


interface IProps{
    onClick : () => any,
    popUp ?: boolean,
    color ?: string,
    size ?: number,
}

export default function RemoveIcon({onClick, popUp, color, size} : IProps) {


    const [open, setOpen] = useState<boolean>(false)
    const theme = useThemes();

    return (
        <>

            <div onClick={() => popUp ? setOpen(true) : onClick() } style={{zIndex: 300, cursor: "pointer"}}>
                <Icon color={color }>
                    <FaTrashAlt  size={size}></FaTrashAlt>
                </Icon>
            </div>

            <VerticallyCenteredModal show={open} onHide={() => setOpen(false)} title=" " footer={
                
                    <div className="d-flex justify-content-center w-100">
                        <Button onClick={() => setOpen(false)} style={{color: theme.colors.textPrimary, backgroundColor: "transparent", border: 0}}  className="mr-3">Cancelar</Button>
                        <Button variant="danger" onClick={() => { onClick(); setOpen(false);}}>Eliminar</Button>
                    </div>
                
            }>
                <div className="d-flex flex-column w-100 justify-content-center align-items-center text-center">
                    <BsXCircle size={100} color="#dc3545" className="mb-4"></BsXCircle>
                    <h3 style={{marginBottom: 20}}>¿Estas seguro?</h3>
                    <Title4 color="secondary" >¿De verad quieres eliminar este registro? No podras volver a recuperarlo</Title4>
                </div>
            </VerticallyCenteredModal>

        </>
    )
}
