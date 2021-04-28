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
    onHide ?: any,
    show ?: any,
    setShow ?: any,

}

export default function DayElement({component, id, index, modifyElement, children, onHide, show, setShow} : props) {

    const [hover, setHover] = useState(false)
    const theme = useThemes()

    return (
        <>
            <DraggingComponent id = {id} index = {index} className = "col-12">
                    <div className="mt-3">
                        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                            <ContainerBox color="primary" style={{border: `2px ${hover ? theme.colors.tertiary : "transparent"} solid`, transition: "0.3s all ease", transform : hover ? "scale(1.03)" : "scale(1)"}}>

                            {
                                children
                            }


                            </ContainerBox> 
                        </div>
                    </div>
                    
            </DraggingComponent>

            {
                show && setShow ?
                modifyElement(component, show, () => {setShow(false); if(onHide) onHide();})
                :
                null
                
            }
        </>
    )
}
