import React from 'react'
import { useSelector } from 'react-redux'
import useNotification from '../../../CustomHooks/useNotification'
import VerticallyCenteredModal from '../../General/Constants/Modals/VerticallyCenteredModal'

export default function PopUpCenter() {

    const popUp = useSelector((state : any) => state.notifications.popup)
    const notificationHook = useNotification()


    return (
        <div>

            {
            popUp ?
                <VerticallyCenteredModal
                
                title = {""}
                footer = {<></>}
                show={popUp ? true : false}
                onHide = {notificationHook.closePopUp}

                >
                    <div style={{textAlign: "center"}} className=" p-4">
                    
                    {
                        popUp.image
                    }
                    {
                        popUp.title
                    }

                    {

                        popUp.body

                    }
                    </div>
                </VerticallyCenteredModal>
                :
                null
            }
            
        </div>
    )
}
