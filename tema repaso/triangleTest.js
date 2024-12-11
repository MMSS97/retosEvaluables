"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var triangle_1 = require("./triangle");
var ver1 = new point_1.Point(2, 2);
var ver2 = new point_1.Point(3, 3);
var ver3 = new point_1.Point(8, 2);
var triangle1 = new triangle_1.triangle(ver1, ver2, ver3);
console.log(triangle1.calculateLengthSides());
