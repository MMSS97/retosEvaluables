"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imdb = void 0;
var imdb = /** @class */ (function () {
    function imdb(movie) {
        this.peliculas = movie;
    }
    imdb.prototype.showData = function () {
        return this.peliculas;
    };
    return imdb;
}());
exports.imdb = imdb;
