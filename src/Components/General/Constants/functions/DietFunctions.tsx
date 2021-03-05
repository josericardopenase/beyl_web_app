import React from 'react'

export function MetabolismoBasal(peso : number, altura : number, edad : number, sexo : string, sport_amount : string) {

    let sport = 1.5

    console.log(sport_amount)

    switch(sport_amount.toUpperCase()){
        case 'NE':
            sport = 1.2 
            break;
        case 'EL':
            sport = 1.375
            break;
        case 'EM':
            sport = 1.55 
            break;
        case 'EF':
            sport = 1.725 
            break;
        case 'EMF':
            sport = 1.9 
            break;
        
    }

    console.log(sport)

    return Math.round(((10 * peso) + (6.25 * altura) - (5 * edad) + (sexo.toLowerCase() === "hombre" ? 5 : -161)) * sport)

}


export function getAmountExcersise(excersise : string){

    const exc = excersise.toLocaleUpperCase()

    switch(exc){
        case 'NE':
            return "Ningún o muy poco ejercicio"
            break;
        case 'EL':
            return "Ejercicio ligero (1-3 días en semana)"
            break;
        case 'EM':
            return "Ejercicio moderado (3-5 días a la semana)"
            break;
        case 'EF':
            return "Ejercicio fuerte (6-7 días a la semana)"
            break;
        case 'EMF':
            return "Ejercicio muy fuerte (dos veces al día)"
            break;
        
    }
}

