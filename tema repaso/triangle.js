"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triangle = void 0;
var triangle = /** @class */ (function () {
    function triangle(vertex1, vertex2, vertex3) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }
    triangle.prototype.calculateLengthSides = function () {
        var distances = [];
        var distanceL1 = this.vertex1.calculateDistance(this.vertex2);
        var distanceL2 = this.vertex2.calculateDistance(this.vertex3);
        var distanciaL3 = this.vertex3.calculateDistance(this.vertex1);
        distances.push(distanceL1, distanceL2, distanciaL3);
        return distances;
    };
    return triangle;
}());
exports.triangle = triangle;
