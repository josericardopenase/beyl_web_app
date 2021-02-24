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
        <ContainerGraphs col={8} title={"Evolución de peso"}>
            <ResponsiveContainer width="99%" height={350}>
                <LineChart
                        data={weightHistory.reverse()}
                        margin={{
                        top: 5, right: 30, left: -14, bottom: 5,
                        }}
                    >
                        <Legend
                            margin={{top: 10}}
                        />
                        <XAxis dataKey="created" fontSize={10}/>
                        <YAxis domain={[40,80]} unit="Kg"/>
                        <Tooltip contentStyle={{backgroundColor: themes.colors.primary, borderRadius: 10, border : 0}} labelStyle={{color: themes.colors.textPrimary}} />
                        <Line type="monotone" dataKey="data" name="peso" unit="Kg" stroke="#ffc600" activeDot={{ r: 8, }} strokeWidth={5} />
                    </LineChart>
                </ResponsiveContainer>
        </ContainerGraphs>
    )
}
