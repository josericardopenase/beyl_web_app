import React, { useContext, useState } from 'react'
import ThemeContext from '../../../../../Store/Themes/ThemeContext'
import ContainerBox from '../../../../General/Containers/ContainerBox'
import Themes from '../../../../General/Styles/Themes'

import Lightbox from 'react-image-lightbox';
import useThemes from '../../../../../CustomHooks/useThemes';
interface props{
    main : boolean,
    message: any
}
export default function Message({main, message} : props) {
    const theme = useThemes()
    const [activeImage, setActiveImage] = useState(false);

    const time=new Date(message.created)

    const styles = {

        container : {
            backgroundColor: main ? "rgba(255, 198, 0, 0.20)" : theme.colors.secondary,
            color: theme.colors.textPrimary,
            padding: 10,
            borderRadius: main ? "10px 10px 0px 10px" : "10px 10px 10px 0px",
            width: "fit-content",
            margin: 10,
            maxWidth: "500px",
            height: "fit-content"
        }  as React.CSSProperties
        ,
        innerContainer: {
            display: "flex"

        } as React.CSSProperties,
        date  : {
            fontSize: "10px",
            color: theme.colors.textSecondary,
            display: "flex",
            justifyContent: main ? "flex-end" : "flex-start",
            alignSelf: "flex-end",
            marginLeft: 10

        } as React.CSSProperties 
        
    };

    return (
        <div style={{ display: "flex", justifyContent: main ?  "flex-end" : "flex-start"}}>
            <div style={styles.container}>

                {
                    message.attached_file ?


                        <>
                            {
                                activeImage  ?
                                    <Lightbox
                                       mainSrc={message.attached_file} 
                                       onCloseRequest={() => setActiveImage(false)}
                                    ></Lightbox>
                                : 
                                null
                            }
                            <img onClick={() => setActiveImage(true)} src={message.attached_file} width="100%" height="330px" style={{borderRadius: "10px", marginBottom: 10, objectFit: "cover"}}></img>
                        </>
                    :
                    null
                }

                <div style={styles.innerContainer}>
                    <div>
                        {message.content}
                    </div>

                    <div style={styles.date}>
                        {
                            `${time.getHours()}:${time.getMinutes()}` 
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
