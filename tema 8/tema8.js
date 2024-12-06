"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        var vector;
        vector = [];
        for (var i = 0; i < n; i++) {
            var nRandom = Math.floor(Math.random() * k);
            vector.push(nRandom);
            this.elements = vector;
        }
    }
    Vector.prototype.print = function () {
        return this.elements;
    };
    return Vector;
}());
exports.Vector = Vector;
