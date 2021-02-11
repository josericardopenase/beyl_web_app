import React, { useContext, useEffect, useState } from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useRouteMatch } from 'react-router-dom'
import useVisible from '../../../../../CustomHooks/useVisible'
import { deleteDietDay, patchDietDay } from '../../../../../Store/Diets/dietDays'
import { patchDay, deleteDay } from '../../../../../Store/Rutines/rutineDays'
import ThemeContext from '../../../../../Store/Themes/ThemeContext'
import * as types from '../../../../../Types/Types'
import DraggingComponent from '../../../../General/Constants/DragAndDrop/DraggingComponent'
import { Icon } from '../../../../General/Constants/Icons/Icon'
import Input from '../../../../General/Constants/Text/Inputs/Input'
import TitleInput from '../../../../General/Constants/Text/interactable/TitleInput'
import { Title3 } from '../../../../General/Constants/Text/Title3'
import ContainerBox from '../../../../General/Containers/ContainerBox'
import Themes from '../../../../General/Styles/Themes'

interface IProps {
    day: types.Day,
    index : number,
    rutine : boolean
}

export const Day = ({ day, index, rutine} : IProps) => {

    const [text, setText] = useState(day.name);

    const loc = useRouteMatch();
    const dispatch = useDispatch();
    const active = useRouteMatch(`${loc.url}/${day.id}`);
    const themes = useContext(ThemeContext);

    const {ref, isVisible, setIsVisible} = useVisible(false);

    useEffect(() => {

        changeName();

        if(ref.current != null){
            ref.current.focus();
            ref.current.select();
        }
    }, [isVisible])
    
    function pressEnter(event : any){
        if(event.key == "Enter"){
            setIsVisible(false);
        }
    }

    function changeName(){
        if(day.name != text && text.length > 0){
            if(rutine){
                dispatch(patchDay({name : text, id : day.id}))
            }else{
                dispatch(patchDietDay({name : text, id : day.id}))
            }
        }
    }

    function deleteCurrentDay(){
        if(rutine){
            dispatch(deleteDay(day.id))
        }else{
            dispatch(deleteDietDay(day.id))
        }
    }

    return (
        <DraggingComponent id = {day.id} index = {day.order}>
                <div className="mr-3">
                    <ContainerBox color={active ? Themes.beylColor : themes.colors.secondary}>
                        <div className="pl-2 pr-2 d-flex align-items-center"> 

                            <Link to = {`${loc.url}/${day.id}`} >
                                { !isVisible ? 
                                <Title3 style={active ? {color: "white"  } : {}}>{day.name}</Title3> 
                                :
                                <Input onChange = {(data : any) => setText(data.target.value)}  customref ={ref} style={{width: 120}} defaultValue = {day.name} onKeyDown = {pressEnter}></Input>
                                }
                            </Link>

                            <div onClick = {() => setIsVisible(!isVisible)}>
                                <Icon color={active ? "white" : ""}>
                                    <FaEdit name="FaEdit" className="ml-3"></FaEdit>
                                </Icon>
                            </div>

                            <div onClick = {deleteCurrentDay}>
                                <Icon color={active ? "white" : ""}>
                                    <FaTrashAlt name="FaEdit" className="ml-3"/>
                                </Icon>
                            </div>

                        </div>
                    </ContainerBox>
                </div>
        </DraggingComponent>
    )
}