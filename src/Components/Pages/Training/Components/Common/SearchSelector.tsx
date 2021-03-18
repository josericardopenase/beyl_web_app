import { useField, useFormikContext } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import apiTraining from '../../../../../Api/apiTraining'
import useApiCallback from '../../../../../CustomHooks/useApiCallback'
import useThemes from '../../../../../CustomHooks/useThemes'
import Bottom1 from '../../../../General/Constants/Button/Button1'
import LoadingButton from '../../../../General/Constants/Button/LoadingButton'
import { Bolder } from '../../../../General/Constants/Text/Bolder'
import Input from '../../../../General/Constants/Text/Inputs/Input'
import { Title2 } from '../../../../General/Constants/Text/Title2'
import { Title3 } from '../../../../General/Constants/Text/Title3'
import { Title4 } from '../../../../General/Constants/Text/Title4'
import ContainerBox from '../../../../General/Containers/ContainerBox'
import Themes from '../../../../General/Styles/Themes'
import ExcersisePuntuation from '../../Pages/Rutine/Components/ExcersisePuntuation'

interface IProps{
    apiFunction : any,
    name : string, 
    multiple : boolean,
    element : (obj : any) => any,
    selectedItems ?: any,
    setSelectedItems ?: any,
    maxSelectedItems ?: number
}

export default function SearchSelector({apiFunction, name, multiple, element, selectedItems, setSelectedItems, maxSelectedItems} : IProps) {

    const theme = useThemes();

    const [text, setText] = useState("");
    const [excersises, setExcersises] = useState<any[]>([])
    const [field] = useField(name);
    const [page, setPage] = useState(1);
    const [state, setState] = useState<any>(multiple ? [] : null)
    const [more, setMore] = useState(true)
    const [search, setSearch] = useState<any>(null);

    const formik = useFormikContext()

    const apiExcersises = useApiCallback(apiFunction, 
        (data : any) => {

           if(data.next == null){
                setMore(false)
            }else{
                setMore(true);
            }

            if(page == 1){
                setExcersises([...data.results])
            }else{
                setExcersises([...excersises, ...data.results])
            }
        }
    )

    useEffect(() => {

        apiExcersises.request(text, page)

    }, [page])

    useEffect(() => {




        if(search){
            clearTimeout(search)
        }

        console.log(page)

        setSearch(setTimeout(() =>{
            setPage(1);
            apiExcersises.request(text, page)
        }, 200))

    }, [text])

    function addToState (obj : any){
        if(multiple){
            if(maxSelectedItems)
                if(maxSelectedItems <= field.value.length)
                    return;

            if(setSelectedItems)
                setSelectedItems([...selectedItems, obj])

            formik.setFieldValue(name, [...field.value, obj.id])
        }else{
            if(setSelectedItems)
                setSelectedItems(obj)

            formik.setFieldValue(name, obj.id)
        }


        console.log(formik.values)

    }

    function deselectAll(){

        if(multiple){
            if(setSelectedItems)
                setSelectedItems([])

            formik.setFieldValue(name, [])
        }else{
            if(setSelectedItems)
                setSelectedItems(null)

            formik.setFieldValue(name, null)
        }
    }

    function removeFromState(obj : any){

        formik.setFieldValue(name, field.value.filter((ids : number) => ids !== obj.id))

        if(setSelectedItems)
            setSelectedItems(selectedItems.filter((cobj : any) => obj.id !== cobj.id))

    }

    

    return (

        <div>
            <Input primary={true} onChange={(e : any) => setText(e.target.value)} style={{backgroundColor: theme.colors.secondary, width: "100%"}} 
            icon = {<FaSearch size={15}></FaSearch>}
            placeholder = {"Busca un ejercicio"}></Input>

            <div className={"w-100 text-center"}>
                { multiple ? <Title2 style={{marginTop: 20}}><Bolder>{field.value.length > 1 ? "Superserie" : field.value.length == 1 ? "Serie normal" : ""}</Bolder></Title2> : null}
            </div>
            <div className={"w-100 text-left d-flex align-items-center justify-content-between mt-3"}>
                <Title3>{multiple ? field.value.length : field.value ? 1 : 0} Items Seleccionados</Title3>
                <div onClick={() => deselectAll()} style={{backgroundColor: "#e3344c", padding: 5, borderRadius: 5, cursor: "pointer" }}><Bolder>Quitar todos</Bolder></div>
            </div>
            {
                excersises.map((obj) => (
                    <div className="mt-3 p-1" style={{backgroundColor: multiple ? field.value.includes(obj.id) ? Themes.beylColor : "transparent" : field.value===obj.id ? Themes.beylColor :  "transparent", borderRadius: 20, cursor: "pointer"}} onClick = {() => {
                        if(multiple){
                            if(field.value.includes(obj.id)){
                                removeFromState(obj) 
                            }else {
                                addToState(obj)
                            }
                        }else{
                            if(field.value !== obj.id){
                                addToState(obj)
                            }
                        }
                    }
                    }>
                        {
                            element(obj)
                        }
                    </div>
                    )
                )
            }

            { more === true ? <LoadingButton onClick={ ()=> { console.log(page); setPage(page + 1);}} /> : null }
        </div>
    )
}
