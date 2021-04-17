import { render } from '@testing-library/react';
import React, { useRef, useState } from 'react'
import { Overlay, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';
import { OverlayChildren } from 'react-bootstrap/esm/Overlay';
import { BsQuestion } from 'react-icons/bs';
import { TooltipProps } from 'recharts';
import useThemes from '../../../../CustomHooks/useThemes';
import useVisible from '../../../../CustomHooks/useVisible';
import { Icon } from '../Icons/Icon';
import { Title4 } from '../Text/Title4';

interface IProps{
    size: string,
    children : any,
    show ?: boolean
}

export default function InterrogationTooltip({size, children, show} : IProps) {

    const {isVisible, setIsVisible, ref} = useVisible(false);
    const target = useRef(null);
    const theme = useThemes();

    return (

        <OverlayTrigger trigger="click" placement="right" show={isVisible} overlay={
            <Popover  className="shadow" id="popover-positionet-right" style={{borderRadius: 10, backgroundColor: theme.colors.secondary, outline: 0, border: 0}}>
                <Popover.Content style={{fontFamily: "Poppins"}}>
                    <Title4>
                        {
                            children
                        }
                    </Title4>
                </Popover.Content>
            </Popover>
        }>
            <div onClick={() => setIsVisible(!show)} ref={ref} style={{borderRadius: "50%", backgroundColor: theme.colors.secondary, marginLeft: 5, marginRight: 5}}>
                <Icon size={size}>
                    <BsQuestion></BsQuestion>
                </Icon>    
            </div>
        </OverlayTrigger>
    )
}
