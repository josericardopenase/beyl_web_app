import { useField, useFormikContext } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Container } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import apiTraining from '../../../../../Api/apiTraining'
import useApiCallback from '../../../../../CustomHooks/useApiCallback'
import useDidMountEffect from '../../../../../CustomHooks/useDidMountEffect'
import useThemes from '../../../../../CustomHooks/useThemes'
import excersise from '../../../../../Store/Rutines/excersise'
import Bottom1 from '../../../../General/Constants/Button/Button1'
import LoadingButton from '../../../../General/Constants/Button/LoadingButton'
import TagList from '../../../../General/Constants/TagLIst'
import { Bolder } from '../../../../General/Constants/Text/Bolder'
import Input from '../../../../General/Constants/Text/Inputs/Input'
import { Title2 } from '../../../../General/Constants/Text/Title2'
import { Title3 } from '../../../../General/Constants/Text/Title3'
import { Title4 } from '../../../../General/Constants/Text/Title4'
import ContainerBox from '../../../../General/Containers/ContainerBox'
import Themes from '../../../../General/Styles/Themes'
import ExcersisePuntuation from '../../Pages/Rutine/Components/ExcersisePuntuation'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
interface IProps{
    apiFunction : any,
    name : string, 
    multiple : boolean,
    element : (obj : any) => any,
    selectedItems ?: any,
    setSelectedItems ?: any,
    maxSelectedItems ?: number,
    tagsFunction : any
}

export default function SearchSelector({apiFunction, name, multiple, element, selectedItems, setSelectedItems, maxSelectedItems, tagsFunction} : IProps) {

    const theme = useThemes();

    const [text, setText] = useState("");
    const [excersises, setExcersises] = useState<any[]>([])
    const [field] = useField(name);
    const [page, setPage] = useState(1);

    const [state, setState] = useState<any>(multiple ? [] : null)
    const [more, setMore] = useState(true)
    const [tags, setTags] = useState<number[]>([]);


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

    useDidMountEffect(() => {


        const currPage = page
        setExcersises([])
        setPage(1);

        if(currPage == 1){
            apiExcersises.request(text, page, tags)
        }

    }, [tags])

    useEffect(() => {

        apiExcersises.request(text, page, tags)

    }, [page])


    useDidMountEffect(() => {

        if(search){
            clearTimeout(search)
        }

        setSearch(setTimeout(() =>{
            if(page == 1){
                apiExcersises.request(text, page, tags)
            }else{
                setPage(1);
            }
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

    function onClickExcersise(obj : any){

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
    

    return (

        <div>
            <Input primary={true} onChange={(e : any) => setText(e.target.value)} style={{backgroundColor: theme.colors.secondary, width: "100%"}} 
            icon = {<FaSearch size={15}></FaSearch>}
            placeholder = {"Buscar..."}></Input>
            <div className={"w-100 text-center mb-4"}>
                { multiple ? <Title2 style={{marginTop: 20}}><Bolder>{field.value.length > 1 ? "Superserie" : field.value.length == 1 ? "Serie normal" : ""}</Bolder></Title2> : null}
            </div>

            <TagList fontSize={"0.9rem"} getTagsFunc={tagsFunction} tags={tags} setTags={setTags}></TagList>

            <div className={"w-100 text-left d-flex align-items-center justify-content-between mt-2"}>
                <Title3>{multiple ? field.value.length : field.value ? 1 : 0} Items Seleccionados</Title3>
                <div onClick={() => deselectAll()} style={{backgroundColor: "#e3344c", padding: 5, borderRadius: 5, cursor: "pointer" }}><Bolder>Quitar todos</Bolder></div>
            </div>
            <Container fluid>
                <Row className="mt-3">
                {
                    excersises.length >= 1 ?

                        <>
                        {
                        excersises.map((obj) => (
                            <div className="col-md-6 p-0 h-100" style={{
                                border: `6px ${theme.colors.primary} solid`,
                                backgroundColor: theme.colors.primary ,
                                borderRadius: 25, 
                                cursor: "pointer"
                            }} onClick = {() => onClickExcersise(obj)}>
                                <div style={{
                                    border: multiple ? field.value.includes(obj.id) ? `3px ${Themes.beylColor} solid`: `3px ${theme.colors.primary} solid` : field.value===obj.id ? `3px ${Themes.beylColor} solid` : `3px ${theme.colors.primary} solid`, 
                                    borderRadius: 25, 
                                    backgroundColor: theme.colors.secondary
                                }}
                                
                                className=" h-100"
                                >
                                {
                                    element(obj)
                                }
                                </div>
                            </div>
                            )
                        )
                            }
                            {
                                apiExcersises.loading ?
                        [1,2,3,4,5,6,7,8].map(() => 
                            <div className="col-md-6 p-2 mb-3" style={{
                            }} >
                                <SkeletonTheme color={theme.colors.secondary} highlightColor="#444">

                                        <Skeleton count={1} height={105} style={{borderRadius: 20}}/>

                                </SkeletonTheme>
                            </div>
                        )
                                :
                                null
                            }
                        </>
                    :

                    apiExcersises.loading ?

                        [1,2,3,4,5,6,7,8].map(() => 
                            <div className="col-md-6 p-2 mb-3" style={{
                            }} >
                                <SkeletonTheme color={theme.colors.secondary} highlightColor="#444">

                                        <Skeleton count={1} height={105} style={{borderRadius: 20}}/>

                                </SkeletonTheme>
                            </div>
                        )
                    :
                            null

                }
                </Row>
            </Container>
            { more === true ? <LoadingButton onClick={ ()=> { console.log(page); setPage(page + 1);}} /> : null }
        </div>
    )
}
