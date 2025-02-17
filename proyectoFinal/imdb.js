"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imdb = void 0;
var movie_1 = require("./movie");
var fs_1 = require("fs");
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.showData = function () {
        return this.peliculas;
    };
    Imdb.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    Imdb.prototype.escribirEnFicheroJson = function (nombreFichero) {
        var jsonString = this.toJson();
        (0, fs_1.writeFileSync)(nombreFichero, jsonString, 'utf8');
    };
    Imdb.obtenerInstanciaIMDB = function (nombreFichero) {
        var jsonString = (0, fs_1.readFileSync)(nombreFichero, 'utf8');
        var data = JSON.parse(jsonString);
        var peliculas = data.peliculas.map(function (movieData) {
            var movie = new movie_1.Movie(movieData.title, movieData.releaseYear, movieData.nationality, movieData.genre);
            Object.assign(movie, movieData);
            return movie;
        });
        return new Imdb(peliculas);
    };
    return Imdb;
}());
exports.Imdb = Imdb;
