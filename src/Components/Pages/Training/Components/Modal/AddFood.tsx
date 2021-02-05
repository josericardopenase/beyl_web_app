import React, { useState } from 'react'
import { Button, Dropdown } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import useThemes from '../../../../../CustomHooks/useThemes'
import VerticallyCenteredModal from '../../../../General/Constants/Modals/VerticallyCenteredModal'
import Input from '../../../../General/Constants/Text/Inputs/Input'
import Button1 from '../../../../General/Constants/Button/Button1'
import TextArea from '../../../../General/Constants/Text/Inputs/TextArea';
import MultipleModal from '../../../../General/Constants/Modals/MultipleModal';
import { Formik } from 'formik';


export default function AddFood(props: any) {

    const theme = useThemes();
    const [index, setIndex] = useState<number>(1);


    return (

        <Formik initialValues={{excersise : [] , series: "", description : ""}} onSubmit={() => console.log("hello")}>
        {
        
            () => (
                <MultipleModal {...props}  title="Añadir alimento" onFinish={() => console.log("hello world")}>
                {

                    [
                    <Input style={{backgroundColor: theme.colors.secondary, width: "100%"}} 
                    icon = {<FaSearch></FaSearch>}
                    placeholder = {"Busca un alimento"}></Input>,

                    <>
                        <div className="d-flex">

                            <Input style={{backgroundColor: theme.colors.secondary, width: "100%"}} 
                            placeholder = {"Cantidad de ración"}></Input>
                            <Dropdown className="ml-2">

                                <Dropdown.Toggle style={{backgroundColor: theme.colors.secondary, border: 0}}>
                                    unidad
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Gramos</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Onza</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Unidades</Dropdown.Item>
                                </Dropdown.Menu>

                            </Dropdown>
                        </div>
                    </>
                    ]
                }
                </MultipleModal>
            )
        }

        </Formik>
    )
}
