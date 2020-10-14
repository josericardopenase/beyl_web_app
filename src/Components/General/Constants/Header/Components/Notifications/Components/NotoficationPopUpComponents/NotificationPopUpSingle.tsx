import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';
import ThemeContext from '../../../../../../../../Store/Themes/ThemeContext'
import Themes from '../../../../../../Styles/Themes';
import { Icon } from '../../../../../Icons/Icon';
import { Title4 } from '../../../../../Text/Title4';

interface props{
    notification ?: string,
    icon ?: any,
    seen ?: boolean,
    color ?: string

}

export const NotificationPopUpSingle = ({notification, icon, color, seen} : props) => {

    const theme = useContext(ThemeContext);

    const style : React.CSSProperties = {

        backgroundColor: theme.colors.primary,
        padding: 10,
        borderRadius: "10px",
        marginTop: 10,
        cursor: "pointer"

    }

    return (
        <div style={style} className="NotificationPopUpSingle">

            <Row className="align-items-center">

                <Col sm={1}>
                
                    <Icon color={color}>
                        {
                            icon
                        }
                    </Icon>

                </Col>

                <Col sm={seen ? 9 : 10}>
                    <Title4>
                        {
                            notification
                        }
                    </Title4>
                </Col>
                
                {seen ?
                <Col sm={1}>
                
                    <div style={{backgroundColor: Themes.beylColor, width: "5px", height: "5px", borderRadius: "50%"}}></div>

                </Col>
                : null}

            </Row>
        </div>
    )
}
