import { motion } from 'framer-motion'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'
import useThemes from '../../../../../../CustomHooks/useThemes'

import { Bolder } from '../../../../../General/Constants/Text/Bolder'
import { Title3 } from '../../../../../General/Constants/Text/Title3'
import ContainerBox from '../../../../../General/Containers/ContainerBox'
import Themes from '../../../../../General/Styles/Themes'
import ExcersisePuntuation from '../../../Pages/Rutine/Components/ExcersisePuntuation'

interface IProps{
    obj : any
}

export default function RutineExcersiseSearch({obj} : IProps) {

    const theme = useThemes();

    const styles : React.CSSProperties = {

        backgroundColor: theme.colors.secondary, 
        background : "",
        borderRadius: 25,
        backgroundImage: `    
        linear-gradient(
        rgba(0, 0, 0, 0.65), 
        rgba(0, 0, 0, 0.65)
        ), url(${obj.image}) `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    return (
        

    <div className = "d-flex justify-content-center align-items-center" style={styles}>
        <div className="p-5">
            <Title3><Bolder>{obj.name}</Bolder></Title3>
        </div>

        <div

            className="position-absolute p-3 d-flex" style={{bottom: 0, left: 0}}>
            {
                obj.tags_read.map((x : any) => <div className="mr-2" style={{width: 18, height: 18, border: `4px ${x.color_primary} solid`, borderRadius: "50%"}}></div>)
            }

        </div>

                    <motion.div
            className="position-absolute p-3 d-flex" style={{bottom: 0, right: 0}}
                        whileHover={{ scale: 1.3,shadow: "-2px -1px 15px 7px rgba(0,0,0,0.5)" }}
                        whileTap={{ scale: 0.7 }}

                    >
                                    <FaStar  color={obj.is_favourite ? Themes.beylColor : theme.colors.textSecondary}></FaStar>
                    </motion.div>
    </div>

    )
}
