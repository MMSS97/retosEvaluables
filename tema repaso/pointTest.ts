import { Point } from "./point";
let point1 = new Point (-3, 4);
let point2 = new Point (6, 8);
let point3 = new Point (8, 4);
let point4 = new Point (3, 7);
let points=[new Point (2, 4), new Point (4, 3), new Point (7, 4)];
// point1.X=(4)
console.log(point1.X)
console.log(point1.toString())
console.log(point1.distanceToOrigen())
console.log(point1.calculateDistance(point2))
console.log(point1.calculateQuadrant())
console.log(point1.calculateNearest(points))