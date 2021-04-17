/*

Immutable wrapper to
make a array a ordered set

*/
export default class OrderedSet<T>{

    private arr : T[];
    private comparator : (a : T, b : T) => number;
    private equals : (a : T, b : T) => boolean;

    constructor(arr : T[], comparator : (a : T, b : T) => number, equals : (a : T, b : T) => boolean){ 
        this.arr = arr;
        this.comparator = comparator;
        this.equals = equals;
    }

    public insert(value : T) : boolean{

        if(this.find(value) !== undefined)
            return false;

        this.arr = [...this.arr, value]
        this.arr.sort(this.comparator)
        return true;
        
    }

    public insertMultiple(value : T[]) : boolean{
         
        value.map((x : T) => {
            if(this.find(x) === undefined)
                this.arr =  [...this.arr, x]
        })

        this.arr.sort(this.comparator)
        return true;

    }

    public remove(value : T){

        this.arr = this.arr.filter((x : T) => this.equals(x, value) === true)

    }

    public find (value : T) : T | undefined{

        return this.arr.find((x : T) => this.equals(x, value) === true)

    }

    public array() : T[]{
        return this.arr
    }


}