"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        var vector = [];
        for (var i = 0; i < n; i++) {
            var nRandom = Math.floor(Math.random() * k) + 1;
            vector.push(nRandom);
        }
        this.elements = vector;
    }
    Vector.prototype.print = function () {
        console.log(this.elements);
    };
    Vector.prototype.add = function (v1) {
        var newElements = this.elements.map(function (value, index) { return value + v1.elements[index]; });
        var result = new Vector(0, 0);
        result.elements = newElements;
        return result;
    };
    Vector.prototype.subs = function (v1) {
        var newElements = this.elements.map(function (value, index) { return value - v1.elements[index]; });
        var result = new Vector(0, 0);
        result.elements = newElements;
        return result;
    };
    Vector.prototype.mult = function (v1) {
        var newElements = this.elements.map(function (value, index) { return value * v1.elements[index]; });
        var result = new Vector(0, 0);
        result.elements = newElements;
        return result;
    };
    Vector.prototype.multNumber = function (n) {
        var newElements = this.elements.map(function (value) { return value * n; });
        var result = new Vector(0, 0);
        result.elements = newElements;
        return result;
    };
    return Vector;
}());
exports.Vector = Vector;
