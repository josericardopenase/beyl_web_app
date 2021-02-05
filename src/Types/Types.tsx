export interface Day{
    id: number,
    rutineId: number,
    name : string,
    order : number
}

export interface Group{
    id : number,
    name : string,
    day : number,
    rutine_excersises : any,
    order: number

}

export interface DietFood{
    portionCuantity : number,
    portionUnity : string,
    food : Food
    order : number
}

export interface Food{
    name : string,
    protein : number,
    carbohydrates : number,
    fat : number,
    kcalories : number,
    portionWeight: number,
}

export interface Recipe{
    name : string,
    preparation : string,
    image : string,
    foods : DietFood[]
}


export interface RutineExcersise{
    series : string,
    anotation : string,
    excersise : Excersise,
    order: number
}

export interface Excersise{
    name : string,
    difficult : number,
    image : string,
    muscles : string,
    description : string,
    video : string
}

export interface Athlete{
    id: number,
    weight : number,
    height : number,
    fat: number,
    user : any,
    trainer_rutine : number,
    trainer_diet : number
}