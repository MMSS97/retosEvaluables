export class Vector 
{private elements:number[];
constructor(n:number , k:number)
{
    let vector : number [];
    vector = [];
 for (let i=0;i<n;i++)
    {let nRandom=Math.floor(Math.random()*k)
    vector.push(nRandom)
    this.elements = vector;
}
}
public print():number[]
{
    return this.elements
}
/// te lo doy hasta aqui, nose como seguir con la suma de v1

}