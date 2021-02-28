import { useField, useFormikContext } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import apiTraining from '../../../../../Api/apiTraining'
import useApiCallback from '../../../../../CustomHooks/useApiCallback'
import useThemes from '../../../../../CustomHooks/useThemes'
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
    apiFunction : () => any,
    name : string, 
    multiple : boolean,
    element : (obj : any) => any
}

export default function SearchSelector({apiFunction, name, multiple, element} : any) {

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

    function addToState (id : number){
        if(multiple){

            formik.setFieldValue(name, [...field.value, id])
        }else{

            formik.setFieldValue(name, id)
        }


        console.log(formik.values)

    }

    function removeFromState(id : number){
        formik.setFieldValue(name, field.value.filter((ids : number) => ids !== id))
    }

    

    return (

        <div>
            <div className="pr-2  pl-2">
                <Input primary={true} onChange={(e : any) => setText(e.target.value)} style={{backgroundColor: theme.colors.secondary, width: "100%"}} 
                icon = {<FaSearch size={15}></FaSearch>}
                placeholder = {"Busca un ejercicio"}></Input>
            </div>
            <div className={"w-100 text-center"}>
                { multiple ? <Title2 style={{marginTop: 20, marginBottom: 20}}><Bolder>{field.value.length > 1 ? "Superserie" : field.value.length == 1 ? "Serie normal" : ""}</Bolder></Title2> : null}
            </div>
            {
                excersises.map((obj) => (
                    <div className="mt-3 p-1" style={{backgroundColor: multiple ? field.value.includes(obj.id) ? Themes.beylColor : "transparent" : field.value===obj.id ? Themes.beylColor :  "transparent", borderRadius: 20, cursor: "pointer"}} onClick = {() => {
                        if(multiple){
                            if(field.value.includes(obj.id)){
                                removeFromState(obj.id) 
                            }else {
                                addToState(obj.id)
                            }
                        }else{
                            if(field.value !== obj.id){
                                addToState(obj.id)
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
