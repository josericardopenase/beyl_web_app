import { CSSProperties } from "react";

namespace TextInterfaces{

    export type FontWeight = 'bolder' | 'bold' | 'normal' | 'light' | 'lighter';
    export type Colors = 'primary' | 'secondary';

    
    export interface IChildrenColorStyle{
        children: any,
        color ?:  Colors,
        style ?: CSSProperties
    };


    export interface IText{
        children: any,
        style ?: React.CSSProperties,
        fontWeight ?: FontWeight,
        color ?: string
    };

}

export default TextInterfaces;