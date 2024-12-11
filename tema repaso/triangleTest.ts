import { Point } from "./point";
import { triangle, } from "./triangle";
let ver1=new Point (2,2)
let ver2=new Point (3,3)
let ver3=new Point (8,2)
let triangle1= new triangle (ver1, ver2, ver3)
console.log(triangle1.calculateLengthSides())
