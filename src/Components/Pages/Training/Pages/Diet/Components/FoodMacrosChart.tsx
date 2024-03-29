import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Label, Legend } from 'recharts';
import useThemes from '../../../../../../CustomHooks/useThemes';

interface IProps{
    food : any,
    actualWeight ?: number,
    width: number | string,
    height: number | string,
    innerRadius ?: number,
    outerRadius ?:number,
    hasCalories ?: boolean,
    showTooltip ?: boolean,
    legend ?: boolean
}

export default function FoodMacrosChart({food, actualWeight, width, height, innerRadius, outerRadius, hasCalories, showTooltip, legend} : IProps) {

    const factor = (actualWeight ? actualWeight : food.portion_cuantity)/food.food.portion_weight;

    const data = [
        { name: 'Carbohidratos', value: Math.round((food.food.carbohydrates * factor)  * 10)/10},
        { name: 'Proteínas', value: Math.round((food.food.protein * factor) * 10)/10 },
        { name: 'Grasas', value: Math.round((food.food.fat * factor) * 10)/10 },
    ];

    if(data[0].value === 0 && data[1].value === 0 && data[2].value === 0 ){

        data[0].value = 1;
        data[1].value= 1;
        data[2].value = 1;

    }

    const themes = useThemes();

    const COLORS = ['#FFDD68', '#FD413C', '#22A447'];

    return (
        <ResponsiveContainer width={width} height={height} className="d-flex align-items-center justify-content-center">
            <PieChart>
                <Pie
                data={data}
                style={{border: 0}}
                width={width}
                height={height}
                innerRadius={innerRadius ? innerRadius : 65}
                outerRadius={outerRadius ? outerRadius : 85}
                cornerRadius={1000}
                fill="#8884d8"
                paddingAngle={10}
                dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} style={{stroke: "none"}} radius={1000} fill={COLORS[index % COLORS.length]} />
                    ))}

                    {
                        hasCalories ? 
                    <Label position="center" style={{fill: themes.colors.textPrimary, fontSize: 16, fontFamily: "Poppins"}}>
                        {
                            Math.round(food.food.kcalories * factor * 10)/10 + " Kcal"
                        }
                    </Label>
                    : 
                    null
                    }
                </Pie>
                {

                showTooltip ?
                    <Tooltip contentStyle={{borderRadius: 10}} />
                    :
                    null
                }
                
                {legend ?
                <Legend verticalAlign="bottom" margin={{top :30}} wrapperStyle={{paddingTop: 10}} height={36}/>
                :
                null
                }

            </PieChart>
        </ResponsiveContainer>
    )
}
