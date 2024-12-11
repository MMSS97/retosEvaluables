 export class Point{
    private x:number;
    private y:number;
    constructor(x:number, y:number){
        this.x=x
        this.y=y
    }
    public get X():number {
        return this.x;
    }
    public get Y ():number {
        return this.y;
    }
    public set X(x:number){
         this.x=x
    }
    public set Y(y:number){
         this.y=y
    }
    public toString():string{
        return "(" + this.x + ","+ this.y + ")"
         }
    public distanceToOrigen():number{
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
    }
    public calculateDistance(anotherPoint:Point):number{
        return Math.sqrt(Math.pow((this.x - anotherPoint.x),2) + Math.pow((this.y - anotherPoint.y),2) * 2);
    }
    public calculateQuadrant():number{
        if (this.X === 0 && this.Y === 0){
            return 0
        }
        else if (this.X > 0 && this.Y > 0){
            return 1
        }
        else if (this.X < 0 && this.Y > 0){
            return 2
        }
        else if (this.X < 0 && this.Y < 0){
            return 3
        }
        else if (this.X > 0 && this.Y < 0){
            return 4
        }
        else {return NaN}
        
    }
    public calculateNearest(points:Point[]):Point{
        if (points.length === 0){
            console.log("Error, no hay datos")
        }
        let nearearestPoint:Point=points[0];
        let minDistance:number=this.calculateDistance(nearearestPoint)
        for (let i = 0; i < points.length; i++){
            let currentPoint=points[i]
            let currentDistance=this.calculateDistance(currentPoint)
            if (currentDistance<minDistance){
                minDistance=currentDistance;
                nearearestPoint=currentPoint
            }
        }        
        return nearearestPoint;
    }

}   
