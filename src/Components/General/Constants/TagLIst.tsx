import React, { useEffect } from 'react'
import useApi from '../../../CustomHooks/useApi'
import useApiCallback from '../../../CustomHooks/useApiCallback'
import Loading from './Loading/Loading';
import { Title3 } from './Text/Title3'
import hexToRgba from 'hex-to-rgba';
import { Bolder } from './Text/Bolder';
import useThemes from '../../../CustomHooks/useThemes';

interface IProps{
    getTagsFunc : (...props : any) => any,
    setTags : any,
    tags : any,
    fontSize ?: string

}



interface tagProps{
    color: string,
    name : string,
    onClick : () => void,
    enable : boolean,
    fontSize ?: string
}
function Tag({color, name, onClick, enable, fontSize} : tagProps){

    return (
        <div onClick={onClick} className="mr-3" style={{backgroundColor: hexToRgba(color, 0.3), paddingRight: 20, paddingLeft: 20, paddingTop: 8, paddingBottom: 8, borderRadius: "40rem", width: "fit-content", border: enable ? `4px ${color} solid` : `4px transparent solid`, cursor: "pointer"}}>
            <h4 className="m-0 p-0" style={{color: color, fontSize: fontSize ? fontSize : "1.122rem", wordBreak: "keep-all", whiteSpace: "nowrap"}}><Bolder>{name}</Bolder></h4>
        </div>
    )

}

export default function TagList({getTagsFunc, setTags, tags, fontSize} : IProps) {

    const getTags = useApi(getTagsFunc)
    const theme = useThemes();
    
    useEffect(() => {

        getTags.request()

    }, [])



    function addTag(tag: any){

        setTags([...tags, tag.id]);

    }

    function removeTag(tag : any){
        setTags(tags.filter((x : any) => x !== tag.id))
    }

    function isTagInTags(tag : any){
        return tags.find((x : any) => x === tag.id)
    }



    return (
        <div  className="mt-2 d-flex horizontal-scroll pb-3" style={{overflow : "auto",}}>

            {
                getTags.loading?

                    [1,2,3,2,3, 2, 3].map(() => (

                            <div  className="mr-3" style={{backgroundColor: theme.colors.secondary, paddingRight: 20, paddingLeft: 20, paddingTop: 10, paddingBottom: 10, borderRadius: "40rem", width: "fit-content", border: `4px transparent solid`, cursor: "pointer"}}>
                                    <h4 className="m-0 p-0" style={{color: theme.colors.secondary, fontSize: fontSize ? fontSize : "1.222rem"}}><Bolder>hello world</Bolder></h4>
                            </div>
                    ))


                :
                getTags.data.map((x : any) => <Tag fontSize={fontSize} enable={isTagInTags(x)} onClick={() => isTagInTags(x) ? removeTag(x) : addTag(x) } color={x.color_primary} name={x.name}></Tag>)
            
            }
            
        </div>
    )
}
