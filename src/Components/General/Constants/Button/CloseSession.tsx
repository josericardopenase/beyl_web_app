import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import { FaSignOutAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import useThemes from '../../../../CustomHooks/useThemes'
import { logOut, removeLocalToken } from '../../../../Store/authentication';
import Themes from '../../Styles/Themes';
import VerticallyCenteredModal from '../Modals/VerticallyCenteredModal';
import CloseSessionPlaceholder from '../SVGS/CloseSessionPlaceholder';
import Placeholder from '../SVGS/Placeholder';
import PlaceHolderEmail from '../SVGS/PlaceholderEmail';
import { Title3 } from '../Text/Title3';
import { Title4 } from '../Text/Title4';

export default function CloseSession() {

    const theme = useThemes();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);


    function onClick(){

            theme.setDarkMode()
            dispatch(logOut({}))
            localStorage.setItem('firstTime', 'true')
            removeLocalToken()
    }

    return (
        <>
        <div className="mt-4 d-flex pl-1" style={{cursor: "pointer"}} onClick={() => setOpen(true)}>
            
            <FaSignOutAlt color={Themes.beylColor}></FaSignOutAlt>
            <Title4 color={Themes.beylColor} style={{marginLeft: 10}}>Cerrar sesión</Title4>



        </div>


            <VerticallyCenteredModal show={open} onHide={() => setOpen(false)} title=" " footer={
                
                    <div className="d-flex justify-content-center w-100">
                        <Button onClick={() => setOpen(false)} style={{color: theme.colors.textPrimary, backgroundColor: "transparent", border: 0}}  className="mr-3">Cancelar</Button>
                        <Button variant="danger" onClick={() => { onClick(); setOpen(false);}}>Continuar</Button>
                    </div>
                
            }>
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column align-items-center text-center">
                        <Title3 style={{marginBottom: 25}}>¿Seguro que quieres cerrar sesión?</Title3>
                        <CloseSessionPlaceholder></CloseSessionPlaceholder>
                    </div>
                </div>
            </VerticallyCenteredModal>
        </>
    )
}
