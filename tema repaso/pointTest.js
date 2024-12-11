"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var point1 = new point_1.Point(-3, 4);
var point2 = new point_1.Point(6, 8);
var point3 = new point_1.Point(8, 4);
var point4 = new point_1.Point(3, 7);
var points = [new point_1.Point(2, 4), new point_1.Point(4, 3), new point_1.Point(7, 4)];
// point1.X=(4)
console.log(point1.X);
console.log(point1.toString());
console.log(point1.distanceToOrigen());
console.log(point1.calculateDistance(point2));
console.log(point1.calculateQuadrant());
console.log(point1.calculateNearest(points));
