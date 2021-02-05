import React, { useEffect, useState } from 'react'
import useVisible from '../../../../../CustomHooks/useVisible';
import Input from '../Inputs/Input';
import { Title3 } from '../Title3';


interface IProps{
    children : any,
    primary ?: string,
    className ?: string,
    onChange ?: (texto : string) => any

}

export default function TitleInput({children, primary, className, onChange} : IProps) {

    const {ref, isVisible, setIsVisible} = useVisible(false);
    const [text, setText] = useState(children);

    useEffect(() => {

        changeName();

        if(ref.current != null){
            ref.current.focus();
            ref.current.select();
        }

        setText(children)
    }, [isVisible])


    function pressEnter(event : any){
        if(event.key == "Enter"){
            setIsVisible(false);
        }
    }
    
    function changeName(){
        if(children != text && text.length > 0 && onChange){
            onChange(text)
        }else{
            setText(children)
        }
    }

    return (
        <div>
            {

                isVisible == false ? 
                <div onClick = {() => { setIsVisible(true); }}>
                    <Title3 style={{marginBottom: "0.5rem", wordBreak: "break-word", whiteSpace: "break-spaces"}}>{children}</Title3> 
                </div>
                :
                <Input onChange = {(data : any) => setText(data.target.value)} customref = {ref} value={text} primary={primary} onKeyDown = {pressEnter} className={className}></Input>

            }
        </div>
    )
}
