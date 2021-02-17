import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import useThemes from '../../../../../CustomHooks/useThemes'
import DraggingComponent from '../../../../General/Constants/DragAndDrop/DraggingComponent'
import ContainerBox from '../../../../General/Containers/ContainerBox'


interface props {
    modifyElement : (component : any, show : any, onHide : () => any) => React.ReactElement,
    id: number,
    index : number,
    children : any,
    component : any,
    onHide ?: any

}

export default function DayElement({component, id, index, modifyElement, children, onHide} : props) {

    const [show, setShow] = useState(false)
    const [hover, setHover] = useState(false)
    const theme = useThemes()

    return (
        <>
            <DraggingComponent id = {id} index = {index} className = "col-12">
                    <div className="mt-3">
                        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                            <ContainerBox color="primary" style={{border: `2px ${hover ? theme.colors.tertiary : "transparent"} solid`, transition: "0.3s all ease "}}>

                            {
                                children
                            }


                            </ContainerBox> 
                        </div>
                    </div>
                    
            </DraggingComponent>

            {
                modifyElement(component, show, () => {setShow(false); if(onHide) onHide();})
            }
        </>
    )
}
