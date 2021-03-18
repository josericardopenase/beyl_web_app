import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Bolder } from '../../../../../General/Constants/Text/Bolder'
import { Title3 } from '../../../../../General/Constants/Text/Title3'
import { Title4 } from '../../../../../General/Constants/Text/Title4'
import ContainerBox from '../../../../../General/Containers/ContainerBox'
import DraggingComponent from '../../../../../General/Constants/DragAndDrop/DraggingComponent'
import ModifyExcersise from '../../../Components/Modal/ModifyExcersise'
import DayElement from '../../../Components/Common/DayElement'
import { RutineExcersise } from '../../../../../../Types/Types'
import { Title2 } from '../../../../../General/Constants/Text/Title2'
import { FaPlus, FaPlay } from 'react-icons/fa'
import { Icon } from '../../../../../General/Constants/Icons/Icon'
import RemoveIcon from '../../../../../General/Constants/Icons/RemoveIcon'
import AnotationIcon from '../../../../../General/Constants/Icons/AnotationIcon'
import { useDispatch } from 'react-redux'
import { deleteRutineExcersise } from '../../../../../../Store/Rutines/rutineExcersise'
import { patchRutineExcersise } from '../../../../../../Store/Rutines/rutineExcersise'
import VerticallyCenteredModal from '../../../../../General/Constants/Modals/VerticallyCenteredModal'
import useThemes from '../../../../../../CustomHooks/useThemes'
import ExcersisePuntuation from './ExcersisePuntuation'


function ImageExcersise({obj} : any){

    const [select, setSelected] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const theme = useThemes();

    return (

        <>
            <Col md={4} style={{cursor: "pointer"}} onClick={() => setShow(true)} className="justify-content-stretch d-flex position-relative justify-content-center align-items-center" onMouseEnter={() => setSelected(true)} onMouseLeave={() => setSelected(false)}>
                <img  style={{borderRadius: "20px", objectFit: "cover", width: "100%", minHeight: "80px", filter: select ? "brightness(30%)" : "brightness(100%)", transition: "0.21s all ease"}} src={obj.image} />
                {
                    select ?

                    <FaPlay size={30} color="white" style={{zIndex: 700, position: "absolute"}}></FaPlay>
                    :
                    null
                }
            </Col>
            <VerticallyCenteredModal show={show} size="lg" onHide={() => setShow(false)} footer={<></>} title="" >
                <div className="p-3">
                    <Title2 style={{marginBottom: 30}}><Bolder>{obj.name}</Bolder></Title2>
                    <video src={obj.video} controls style={{width: "100%", height: 400, backgroundColor: theme.colors.secondary, borderRadius: 15 }}></video>
                    <Title3 style={{marginBottom: 15, marginTop: 15}}><Bolder>Músculos</Bolder></Title3>
                    <Title4 style={{marginBottom: 15, marginTop: 15}} color="secondary" >{obj.muscles}</Title4>
                    <Title3 style={{marginBottom: 15, marginTop: 15}}><Bolder>Dificultad</Bolder></Title3>
                    <ExcersisePuntuation puntuation={obj.difficult} size={28}></ExcersisePuntuation>
                </div>
            </VerticallyCenteredModal>
        </>
    )
}

export const RutineExcercise = ({obj, index} : any) => {

    const dispatch = useDispatch()
    const [show, setShow] = useState<boolean>(false);


    const excersise : RutineExcersise = {
        series : "12-10-8-5",
        anotation : "hazlo fuerte para que duela",
        order : 1,
        excersise : {
            name : "Press de banca",
            difficult : 4,
            image : "",
            video : "",
            muscles : "Chess",
            description: "",
        }
    } 

    return (
        <DayElement component = {excersise} id={obj.id} index={index} show={show} setShow={setShow}
        modifyElement={
            (component, show, hide) => <ModifyExcersise show={show} excersise={obj} onHide={hide}></ModifyExcersise>
        } 
        >
            
            {
            obj.excersise.length == 1? 
            <Row className="align-items-stretch d-flex justify-content-stretch">

                <ImageExcersise obj={obj.excersise[0]} />
                
                <Col md={8} className="d-flex align-items-stretch">
                    <div className="d-flex justify-content-between align-items-stretch w-100">
                        <div className="d-flex flex-column justify-content-center" style={{cursor: "pointer"}} onClick =  {() => setShow(true)}>
                            <Title3 style={{marginBottom: "0.5rem", wordBreak: "break-word", whiteSpace: "break-spaces"}}><Bolder>{obj.excersise[0].name}</Bolder></Title3>
                            <Title4 color="secondary" style={{wordBreak: "break-word", whiteSpace: "break-spaces"}}>{obj.series}</Title4>
                        </div>
                        <div className="p-1 d-flex flex-column justify-content-between">

                            <RemoveIcon onClick={() => dispatch(deleteRutineExcersise(obj.id))}></RemoveIcon>
                            <AnotationIcon obj={obj} modifyMethod = {
                                (text: string) => {
                                    dispatch(patchRutineExcersise({id : obj.id, anotation : text}))
                                }
                            }></AnotationIcon>

                        </div>
                    </div>
                </Col>
            </Row>

            :



                <>
                    <div className="d-flex align-items-stretch justify-content-between p-2">
                        <div className="d-flex flex-column justify-content-center" style={{cursor: "pointer"}} onClick={() => setShow(true)} >
                            <Title3 style={{marginBottom: "0.5rem", wordBreak: "break-word", whiteSpace: "break-spaces"}}><Bolder>Superserie</Bolder></Title3>
                            <Title4 color="secondary" style={{wordBreak: "break-word", whiteSpace: "break-spaces"}}>{obj.series}</Title4>
                        </div>
                        <div className="p-1 d-flex flex-column justify-content-between">

                            <RemoveIcon onClick={() => dispatch(deleteRutineExcersise(obj.id))}></RemoveIcon>
                            <div className="mt-3">
                              <AnotationIcon obj={obj} modifyMethod = {
                                  (text: string) => {
                                      dispatch(patchRutineExcersise({id : obj.id, anotation : text}))
                                  }
                              }></AnotationIcon>
                            </div>
                        </div>
                    </div>
                    { obj.excersise.map((obj : any, i : number) => (

                            <div key={i}>
                                {
                                i !== 0 ?
                                <div className="w-100 justify-content-center d-flex">
                                    <Icon>
                                        <FaPlus></FaPlus>
                                    </Icon>
                                </div>
                                :
                                null
                                }
                                <Row className="align-items-center mt-2">

                                    <ImageExcersise obj={obj} />
                                    
                                    <Col md={8}>
                                        <Title3 style={{marginBottom: "0.5rem", wordBreak: "break-word", whiteSpace: "break-spaces"}}><Bolder>{obj.name}</Bolder></Title3>
                                    </Col>
                                </Row>
                            </div>
                        )
                        )
                    }

                </>
            }
        </DayElement>
    )
}
