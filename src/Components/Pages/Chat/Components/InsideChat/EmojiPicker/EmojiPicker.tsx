import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import useThemes from '../../../../../../CustomHooks/useThemes'
import Input from '../../../../../General/Constants/Text/Inputs/Input';
import { Title2 } from '../../../../../General/Constants/Text/Title2';
import { Title4 } from '../../../../../General/Constants/Text/Title4';
import EmojiList from './emoji.json'


interface IProps{
    baseStyles ?: React.CSSProperties
}

function EmojiCategorie({children} : any){
    return (
        <Title4 color="secondary">{children}</Title4>
    )
}

function Emoji({emoji, onEmojiPick} : any){


    const [hover, setHover] = useState(false);

    return (
        <Col sm={1} onClick={onEmojiPick} style={{fontSize: 19, padding: 5, cursor: "pointer", transform: `scale(${hover ? 1.4 : 1})`, transition: "all 0.2s ease", userSelect: "none"}} onMouseEnter ={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {emoji}
        </Col>
    )

}



export default function EmojiPicker({onEmojiPick} : any) {

    const [text, setText] = useState<string>("");
    const [emojis, setEmojis] = useState(EmojiList);

    const theme = useThemes();

    const styles = {

        base : {

            backgroundColor: theme.colors.secondary,
            width: 500,
            height: 300,
            boxSizing: "border-box",
            scrollBehavior : "auto",
            overflowX: "hidden",
            position : "absolute",
            bottom : "70px",
            left: "0px",
            borderRadius: "20px"

        } as React.CSSProperties,
        title : {
            padding: "15px 20px",
            width: "100%"

        } as React.CSSProperties,
        searchBar : {
            width: "100%",
            padding: "5px 20px",
            backgroundColor: theme.colors.primary,
            borderRadius: "10px",
            border: 0,
            fontWeight: 13,
            color: theme.colors.textPrimary

        } as React.CSSProperties,
        emojisContainer : {
            overflow: "auto",
            height: 230,
            padding: 15,
            overflowX: "hidden",

        } as React.CSSProperties

    }

    useEffect(() => {
        
       if (text === ""){
          setEmojis(EmojiList);
       }

       setEmojis(EmojiList.filter((x) => x.description.includes(text)))
    }, [text])

    const Categories = emojis.map((x) => x.category).filter((item, i, ar) => ar.indexOf(item) === i)

    const EmojiByCategorie = (category : string) => {
        return emojis.filter((x) => x.category == category)
    }


    return (
        <div 
        
/*         key={"emoji picker"}
        initial={{opacity: 0, y: 200}}
        animate = {{opacity : 1, y: 0}}
        exit ={{opacity: 0}} */
        style={styles.base}>
            <div style={{padding: 10}}>
                <input onChange={(e ) => setText(e.target.value)} placeholder="Buscar..." style={styles.searchBar}/>
            </div>
            <div style={styles.emojisContainer}>
                {
                    Categories.map((x) => 
                        <>
                            <EmojiCategorie>{x}</EmojiCategorie>

                            <Row style={{padding: 10}}>
                            {
                                EmojiByCategorie(x).map(
                                    (x) => 
                                        <Emoji onEmojiPick={() => onEmojiPick(x)} emoji={x.emoji}></Emoji>
                                )
                            }
                            </Row>
                        </>

                    )
                }
            </div>
        </div>
    )
}
