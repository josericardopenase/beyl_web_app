import React, { useEffect } from 'react'
import { FaCopy, FaSync, FaTrash, FaRedoAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import useThemes from '../../../CustomHooks/useThemes'
import { athletesReceived, deleteAthlete, loadAthletes } from '../../../Store/athleltes'
import { logOut, removeLocalToken } from '../../../Store/authentication'
import { getAllCode, getNewCode } from '../../../Store/trainerCode'
import { Icon } from '../../General/Constants/Icons/Icon'
import ProfilePicIcon from '../../General/Constants/Icons/ProfilePicIcon'
import RemoveIcon from '../../General/Constants/Icons/RemoveIcon'
import SvgJoinClient from '../../General/Constants/SVGS/SvgJoinClient'
import { Bolder } from '../../General/Constants/Text/Bolder'
import { Title1 } from '../../General/Constants/Text/Title1'
import { Title2 } from '../../General/Constants/Text/Title2'
import { Title3 } from '../../General/Constants/Text/Title3'
import { Title4 } from '../../General/Constants/Text/Title4'
import { Title5 } from '../../General/Constants/Text/Title5'
import ContainerBox from '../../General/Containers/ContainerBox'
import ContainerMarginTop from '../../General/Containers/ContainerMarginTop'
import Themes from '../../General/Styles/Themes'
import { Athlete } from '../Training/Components/Sidebar/Athlete'

function TrainerCode(){

    const themes = useThemes()
    const dispatch = useDispatch()

    const lastCode = useSelector((state : any) => state.trainerCode.list[state.trainerCode.list.length - 1] )

    const style ={
        input : {
            backgroundColor: themes.colors.secondary,
            border : 0,
            color: themes.colors.textPrimary,
            padding: 10,
            borderRadius: "7px 0px 0px 7px"
        },
        boton : {
            backgroundColor: Themes.beylColor,
            border : 0,
            color: themes.colors.textPrimary,
            padding: "10px 15px",
            borderRadius: "0px 7px 7px 0px",
            cursor: "pointer",
        }
    }

    useEffect(() => {
        dispatch(getAllCode());
    }, [])

    return (
        <div className="mt-5 ">
            <Title4>Código para que tus clientes se registren</Title4>
            <Title5 style={{marginTop: 5}}>Solo tienen un uso</Title5>
            <div className="mt-3 d-flex align-items-stretch">
                <input value={lastCode ? lastCode.key : "No tienes ningún código..."} style={style.input}></input>
                <div style={style.boton} className="d-flex flex-column justify-content-center" onClick={() => dispatch(getNewCode())}>
                    <FaRedoAlt style={{color: "white"}}/>
                </div>
            </div>
        </div>
    )

}

function Client({obj} : any){

    const themes = useThemes()
    const dispatch = useDispatch()

    const styles ={
        container : {
            backgroundColor: themes.colors.secondary,
            border : 0,
            color: themes.colors.textPrimary,
            padding: 10,
            borderRadius: 10,
            width: "100%",
            marginTop: 10,
            display: "flex",
        }
    }

    return (
        <div style={styles.container} className="justify-content-between align-items-center">
            
            <div className="d-flex align-items-center align-items-center">
                <ProfilePicIcon size={60} url={obj.user.profile_pic}></ProfilePicIcon>

                <div className="ml-4">
                    <Title3 >{obj.user.first_name + " " + obj.user.last_name}</Title3>
                    <Title5 >{obj.user.email}</Title5>
                </div>

            </div>


            <div className="mr-2">
                <RemoveIcon size={22} popUp={true}  onClick={() => dispatch(deleteAthlete(obj.id))}/>
            </div>

        </div>
    )

}

export default function Clients() {


    const dispatch = useDispatch()

    const athletes = useSelector((state : any) => state.athletes.list)
    const user_count = useSelector((state : any) => state.auth.user)

    useEffect(() => {
        dispatch(loadAthletes)
    }, [])

    if(!user_count){
        return <div></div>
    }


    return (
        <ContainerMarginTop>
            <div className="p-4 pt-5">

                <Title1><Bolder>Gestiona tus clientes</Bolder></Title1>   

                <div className="d-flex align-items-end justify-content-between">
                    <div>
                        <TrainerCode></TrainerCode>
                    </div>

                    <div className="d-flex flex-column align-items-center pr-5 pl-5">
                        <div className="d-flex align-items-end mt-3">
                            <Title1>{athletes.length}/</Title1>
                            <Title1 color={Themes.beylColor}>{user_count.plan.user_count}</Title1>
                        </div>
                        <Title3 style={{marginTop: 10, marginBottom: 10}}>Clientes actuales</Title3>
                    </div>

                </div>

                <div className="mt-4">
                    <Title3>Tus clientes:</Title3>

                    {
                        athletes.length > 0 ?

                            athletes.map((x : any) => <Client obj={x}></Client>)

                        :

                        <div style={{marginTop: 110}}>
                            <SvgJoinClient></SvgJoinClient>
                        </div>
                    }
                </div>

                

            </div>
        </ContainerMarginTop>
    )
}
