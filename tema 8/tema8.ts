export class Vector {
    private elements:number[]
    constructor(n:number , k:number) {
        let vector : number [] = [];
        for (let i=0;i<n;i++) {
            let nRandom=Math.floor(Math.random()*k) + 1
            vector.push(nRandom)
        }
        this.elements = vector
    }
    public print() {
        console.log(this.elements)
    }

    public add(v1:Vector): Vector{
        const newElements = this.elements.map((value,index)=>value+v1.elements[index]);
        const result = new Vector (0, 0);
        result.elements=newElements;
        return result;
    }
    public subs(v1:Vector): Vector{
        const newElements = this.elements.map((value,index)=>value-v1.elements[index]);
        const result= new Vector (0, 0);
        result.elements=newElements;
        return result;
    }
    public mult(v1:Vector):Vector{
        const newElements = this.elements.map((value,index)=>value*v1.elements[index]);
        const result = new Vector (0, 0);
        result.elements=newElements;
        return result;
    }
    public multNumber(n:number):Vector{
        const newElements = this.elements.map((value)=>value*n);
        const result = new Vector (0, 0);
        result.elements = newElements;
        return result
    }


}

