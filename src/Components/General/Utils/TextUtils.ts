export function DateToSpanishDate(Date : string){

    const extractDate : string[] = Date.slice(0, 10).split('-');

    return `${extractDate[2]}-${extractDate[1]}-${extractDate[0]}`;

}