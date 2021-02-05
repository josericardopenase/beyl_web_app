import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
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

    return (
        <>
            <DraggingComponent id = {id} index = {index} className = "col-12">
                    <div className="mt-3">
                        <ContainerBox color="primary">

                        {
                            children
                        }


                        </ContainerBox> 
                    </div>
                    
            </DraggingComponent>

            {
                modifyElement(component, show, () => {setShow(false); if(onHide) onHide();})
            }
        </>
    )
}
