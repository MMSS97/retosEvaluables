import { Point } from "./point";
export class triangle {
    private vertex1: Point
    private vertex2: Point
    private vertex3: Point
    constructor (vertex1:Point , vertex2:Point , vertex3:Point){
        this.vertex1=vertex1
        this.vertex2=vertex2
        this.vertex3=vertex3
    }
    public calculateLengthSides():number[]{
        let distances:number [] = [];
       let distanceL1:number = this.vertex1.calculateDistance(this.vertex2);
       let distanceL2:number = this.vertex2.calculateDistance(this.vertex3);
       let distanciaL3:number = this.vertex3.calculateDistance(this.vertex1);
        distances.push(distanceL1,distanceL2,distanciaL3);
        return distances;
    }
}