import { reorderDay } from "../Rutines/rutineDays";

export default function reorder(state : any, action : any ){

            const item = state.list.find((obj : any) => obj.id === action.payload.id)

            const nuevo_array = state.list.map((obj : any) => {
                if(obj. id === action.payload.id){
                    obj.order = action.payload.order
                    return obj
                }

                if(action.payload.order - item.order < 0){

                    if(obj.order >= action.payload.order ){
                        obj.order += 1;
                        return obj;
                    }else{
                        return obj; 
                    }
                
                }else{
                
                    if(obj.order <= action.payload.order ){
                        obj.order -= 1;
                        return obj;
                    }else{
                        return obj; 
                    }
                }
            })

            return state.list.sort((a: any, b : any) => a.order - b.order)
}


export function reorder_excersise(state : any, action : any ){


            const item = state.list.find((obj : any) => obj.id === action.payload.id)

            console.log(item.group)

            const nuevo_array = state.list.map((obj : any) => {
                if(obj. id === action.payload.id){
                    obj.order = action.payload.order
                    return obj
                }

                if(action.payload.order - item.order < 0){

                    if(obj.order >= action.payload.order && obj.group === item.group){
                        obj.order += 1;
                        return obj;
                    }else{
                        return obj; 
                    }
                
                }else{
                
                    if(obj.order <= action.payload.order && obj.group === item.group){
                        obj.order -= 1;
                        return obj;
                    }else{
                        return obj; 
                    }
                }
            })

            return state.list.sort((a: any, b : any) => a.order - b.order)
}