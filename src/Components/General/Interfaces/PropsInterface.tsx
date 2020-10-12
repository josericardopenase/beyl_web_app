import { CSSProperties } from "react";

namespace PropsInterfaces {



    export interface IOnlyChildren{
        children: any
    };
    
    export interface IChildrenStyles{
        children: any,
        style ?: React.CSSProperties
    };
 

}

export default PropsInterfaces;