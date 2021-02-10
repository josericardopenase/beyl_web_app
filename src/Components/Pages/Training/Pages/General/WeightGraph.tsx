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

const data = [
  {
    name: '29/1/2020', weight: 70,  amt: 2400,
  },
  {
    name: '2/2/2020', weight: 72,  amt: 2210,
  },
  {
    name: '12/2/2020', weight: 74,amt: 2290,
  },
  {
    name: '14/2/2020', weight: 76,amt: 2000,
  },
  {
    name: '18/2/2020', weight: 74,  amt: 2181,
  },
  {
    name: '24/2/2020', weight: 78, amt: 2500,
  },
];

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
        

        console.log(weightHistory)
    }, [athlete]) 

    if(loading){
      return <div>invalid</div>
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
