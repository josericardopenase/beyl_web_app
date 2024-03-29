import React, { useContext, useEffect, useState } from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { Link, useHistory, useLocation, useRouteMatch } from 'react-router-dom'
import useVisible from '../../../../../CustomHooks/useVisible'
import { deleteDietDay, patchDietDay } from '../../../../../Store/Diets/dietDays'
import { patchDay, deleteDay } from '../../../../../Store/Rutines/rutineDays'
import ThemeContext from '../../../../../Store/Themes/ThemeContext'
import * as types from '../../../../../Types/Types'
import DraggingComponent from '../../../../General/Constants/DragAndDrop/DraggingComponent'
import { Icon } from '../../../../General/Constants/Icons/Icon'
import RemoveIcon from '../../../../General/Constants/Icons/RemoveIcon'
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
    const [hover, setHover] = useState(false);

    const loc = useRouteMatch();
    const history = useHistory()
    const dispatch = useDispatch();
    const active = useRouteMatch(`${loc.url}/${day.id}`);
    const themes = useContext(ThemeContext);

    const {ref, isVisible, setIsVisible} = useVisible(false);
    let timer : any = 0;
    let prevent : boolean = false;

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

        if(active)
            history.push(loc.url)

    }


    return (
        <DraggingComponent id = {day.id} index = {day.order}>
                <div className="mr-3" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}  >
                    <ContainerBox color={active ? "rgba(255, 198, 0, 0.20)" : themes.colors.secondary}>
                        <div className="pl-2 pr-2 d-flex align-items-center"> 

                            <div onClick ={() => {
                                timer = setTimeout(() => {
                                    if(!prevent)
                                        history.push(`${loc.url}/${day.id}`)
                                }, 200)
                            } }onDoubleClick={() => {
                                prevent = true;
                                clearTimeout(timer);
                                setIsVisible(!isVisible)
                            }  } >
                                { !isVisible ? 
                                <Title3 style={active ? {color: Themes.beylColor  } : {}} color={hover ? Themes.beylColor : "primary"}>{day.name}</Title3> 
                                :
                                <Input onChange = {(data : any) => setText(data.target.value)}  customref ={ref} style={{width: 120}} defaultValue = {day.name} onKeyDown = {pressEnter}></Input>
                                }
                            </div>

                            <div className="ml-3">
                                <RemoveIcon onClick={deleteCurrentDay} popUp={true} color={active ? Themes.beylColor : undefined}></RemoveIcon>
                            </div>

                        </div>
                    </ContainerBox>
                </div>
        </DraggingComponent>
    )
}
