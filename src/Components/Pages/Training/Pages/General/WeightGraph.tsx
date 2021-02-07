import React from 'react'
import { ContainerBlockBox } from '../../../../General/Containers/ContainerBlockBox'
import ContainerBox from '../../../../General/Containers/ContainerBox'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  } from 'recharts';
import { ContainerGraphs } from '../../../../General/Containers/ContainerGraphs';

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
    return (
        <ContainerGraphs col={8} title={"Evolución de peso"}>
            <ResponsiveContainer width="99%" height={350}>
                <LineChart
                        data={data}
                        margin={{
                        top: 5, right: 30, left: -14, bottom: 5,
                        }}
                    >
                        <Legend
                            margin={{top: 10}}
                        />
                        <XAxis dataKey="name" fontSize={10}/>
                        <YAxis domain={[70,80]}/>
                        <Tooltip contentStyle={{}} />
                        <Line type="monotone" dataKey="weight" stroke="#ffc600" activeDot={{ r: 8 }} strokeWidth={4} />
                    </LineChart>
                </ResponsiveContainer>
        </ContainerGraphs>
    )
}
