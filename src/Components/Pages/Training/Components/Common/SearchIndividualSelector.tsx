import { useField, useFormikContext } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import apiTraining from '../../../../../Api/apiTraining'
import useApiCallback from '../../../../../CustomHooks/useApiCallback'
import useThemes from '../../../../../CustomHooks/useThemes'
import LoadingButton from '../../../../General/Constants/Button/LoadingButton'
import RemoveIcon from '../../../../General/Constants/Icons/RemoveIcon'
import { Bolder } from '../../../../General/Constants/Text/Bolder'
import Input from '../../../../General/Constants/Text/Inputs/Input'
import { Title2 } from '../../../../General/Constants/Text/Title2'
import { Title3 } from '../../../../General/Constants/Text/Title3'
import { Title4 } from '../../../../General/Constants/Text/Title4'
import ContainerBox from '../../../../General/Containers/ContainerBox'
import Themes from '../../../../General/Styles/Themes'
import MacroCounter from '../../Pages/Diet/Components/MacroCounter'
import ExcersisePuntuation from '../../Pages/Rutine/Components/ExcersisePuntuation'

interface IProps{
    apiFunction : () => any,
    name : string
}

export default function SearchSelector({apiFunction, name} : any) {

    const theme = useThemes();

    const [text, setText] = useState("");
    const [excersises, setExcersises] = useState<any[]>([])
    const [field] = useField(name);
    const [page, setPage] = useState(1);
    const [state, setState] = useState<number[]>([])
    const [more, setMore] = useState(true)

    const formik = useFormikContext()
    const apiExcersises = useApiCallback(apiFunction, 
        (data : any) => {

           if(data.next == null){
                setMore(false)
            }else{
                setMore(true);
            }

            setExcersises(data.results)
        }
    )

    useEffect(() => {

        console.log(page)
        apiExcersises.request(text, page);

    }, [page])

    useEffect(() => {

        setPage(1);
        apiExcersises.request(text, page);

    }, [text])

    function addToState (id : number){

        formik.setFieldValue(name, [...field.value, id])

    }

    function removeFromState(id : number){
        formik.setFieldValue(name, field.value.filter((ids : number) => ids !== id))
    }

    

    return (

        <div>
            <Input onChange={(e : any) => setText(e.target.value)} style={{backgroundColor: theme.colors.secondary, width: "100%"}} 
            icon = {<FaSearch></FaSearch>}
            placeholder = {"Busca un ejercicio"}></Input>

            <div className={"w-100 text-center"}>
                <Title2 style={{marginTop: 20, marginBottom: 20}}><Bolder>{field.value.length > 1 ? "Superserie" : field.value.length == 1 ? "Serie normal" : ""}</Bolder></Title2>
            </div>
            {
                excersises.map((obj) => (
                    <div className="mt-1 p-1" style={{backgroundColor: field.value.includes(obj.id) ? Themes.beylColor : "transparent", borderRadius: 20, cursor: "pointer"}} onClick = {field.value.includes(obj.id) ? () => removeFromState(obj.id) : ()=> addToState(obj.id)}>
                        <Row className="align-items-center p-2">
                            <Col md={12}>
                                <Title3 style={{marginBottom: "0.5rem"}}><Bolder>{obj.name}</Bolder></Title3>
                                <Title4 color="secondary">{obj.portion_cuantity} {obj.portion_unity}</Title4>
                            </Col>
                            <MacroCounter portion_cuantity={obj.portion_cuantity} portion_weight={obj.food.portion_weight} protein={obj.food.protein} carbos={obj.food.carbohydrates} calories={obj.food.kcalories} grasas={obj.food.fat} unity={obj.portion_unity}></MacroCounter>
                        </Row>
                    </div>
                    )
                )
            }

            { more === true ? <LoadingButton onClick={ ()=> { console.log(page); setPage(page + 1);}} /> : null }
        </div>
    )
}
