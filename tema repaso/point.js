"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (x) {
            this.x = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "Y", {
        get: function () {
            return this.y;
        },
        set: function (y) {
            this.y = y;
        },
        enumerable: false,
        configurable: true
    });
    Point.prototype.toString = function () {
        return "(" + this.x + "," + this.y + ")";
    };
    Point.prototype.distanceToOrigen = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        return Math.sqrt(Math.pow((this.x - anotherPoint.x), 2) + Math.pow((this.y - anotherPoint.y), 2) * 2);
    };
    Point.prototype.calculateQuadrant = function () {
        if (this.X === 0 && this.Y === 0) {
            return 0;
        }
        else if (this.X > 0 && this.Y > 0) {
            return 1;
        }
        else if (this.X < 0 && this.Y > 0) {
            return 2;
        }
        else if (this.X < 0 && this.Y < 0) {
            return 3;
        }
        else if (this.X > 0 && this.Y < 0) {
            return 4;
        }
        else {
            return NaN;
        }
    };
    Point.prototype.calculateNearest = function (points) {
        if (points.length === 0) {
            console.log("Error, no hay datos");
        }
        var nearearestPoint = points[0];
        var minDistance = this.calculateDistance(nearearestPoint);
        for (var i = 0; i < points.length; i++) {
            var currentPoint = points[i];
            var currentDistance = this.calculateDistance(currentPoint);
            if (currentDistance < minDistance) {
                minDistance = currentDistance;
                nearearestPoint = currentPoint;
            }
        }
        return nearearestPoint;
    };
    return Point;
}());
exports.Point = Point;
