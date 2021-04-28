import React, { useEffect } from 'react'
import { ContainerBlockBox } from '../../../../General/Containers/ContainerBlockBox'
import ContainerBox from '../../../../General/Containers/ContainerBox'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  } from 'recharts';
import { ContainerGraphs } from '../../../../General/Containers/ContainerGraphs';
import useThemes from '../../../../../CustomHooks/useThemes';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { getWeightHistoryFromUser } from '../../../../../Store/weightHistory';
import Loading from '../../../../General/Constants/Loading/Loading';
import { DateToSpanishDate } from '../../../../General/Utils/TextUtils';

export default function WeightGraph() {


    const athlete = useStore().getState().athletes.selectedAthlete
    const weightHistory = useSelector((state : any) => state.weightHistory.list.filter((x : any) => x !== athlete.id))
    const loading = useSelector((state : any) => state.weightHistory.loading)
    const dispatch = useDispatch()

    const themes = useThemes()
    useEffect(() => {
        if(athlete !== undefined){
            dispatch(getWeightHistoryFromUser(athlete.id))
        }
        
    }, [athlete]) 

    if(loading){
      return <Loading></Loading>
    }



      
    return (
        <ContainerGraphs col={7} title={"Evolución de peso"} aclaration="En esta gráfica se mostrara la evolución en el peso de tu cliente desde que empezo a entrenar contigo!">
            <div className="w-100 d-flex justify-content-center">
            <ResponsiveContainer width="100%" height={450}>
                <LineChart
                        data={weightHistory.reverse().map((x : any) => {return {...x, data: Math.round(x.data * 100)/100, created: DateToSpanishDate(x.created) };})}
                        margin={{
                        top: 5, right: 30, left: -14, bottom: 5,
                        }}
                    >
                        <Legend
                            margin={{top: 10}}
                        />
                        <XAxis dataKey="created" fontSize={10}/>
                        <YAxis domain={[Math.min(weightHistory.map((x : any) => Math.round(x.data * 10)/10)),Math.max(weightHistory.map((x : any) => Math.round(x.data * 10)/10))]} unit="kg" fontSize={12}/>
                        <Tooltip contentStyle={{backgroundColor: themes.colors.primary, borderRadius: 10, border : 0}} labelStyle={{color: themes.colors.textPrimary}} />
                        <Line type="monotone" dataKey="data" name="peso" unit="Kg" stroke="#ffc600" activeDot={{ r: 8, }} strokeWidth={5} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </ContainerGraphs>
    )
}
