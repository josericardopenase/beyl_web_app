import { motion } from 'framer-motion'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'
import useThemes from '../../../../../../CustomHooks/useThemes'
import { Bolder } from '../../../../../General/Constants/Text/Bolder'
import { Title3 } from '../../../../../General/Constants/Text/Title3'
import { Title4 } from '../../../../../General/Constants/Text/Title4'
import { Title5 } from '../../../../../General/Constants/Text/Title5'
import ContainerBox from '../../../../../General/Containers/ContainerBox'
import Themes from '../../../../../General/Styles/Themes'
import MacroCounter from '../../../Pages/Diet/Components/MacroCounter'

interface IProps{
    obj : any
}

export default function DietFoodSearch ({obj} : IProps) {

    const theme = useThemes();

    return (
        

            <Row className="align-items-center pr-4 pl-4 pt-4 pb-1">
                <Col md={12}>
                    <div className="d-flex flex-column justify-content-center">
                        <Title3 style={{marginBottom: "0.5rem"}}><Bolder>{obj.name}</Bolder></Title3>
                        <Title4>Por {obj.portion_weight} gr:</Title4>
                    </div>
                </Col>
                <MacroCounter fontSize={12} portion_cuantity={obj.portion_weight} portion_weight={obj.portion_weight} protein={obj.protein} carbos={obj.carbohydrates} calories={obj.kcalories} grasas={obj.fat} unity={"gr"}></MacroCounter>

                <div className="d-flex justify-content-between pr-3 pl-3 pt-3 pb-2 w-100 ">


                        <div

                        className="d-flex" style={{bottom: 0, left: 0}}>
                        {
                            obj.tags_read.map((x : any) => <div className="mr-2" style={{width: 13, height: 13, border: `4px ${x.color_primary} solid`, borderRadius: "50%"}}></div>)
                        }
                        </div>
                    <div


                    >
                                    <FaStar  color={obj.is_favourite ? Themes.beylColor : theme.colors.textSecondary}></FaStar>
                    </div>


                </div>

            </Row>

    )
}
