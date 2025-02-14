"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var imdb_1 = require("./imdb");
var movieTest_1 = require("./movieTest");
var imdb = new imdb_1.Imdb(movieTest_1.myMovies);
// console.log(imdb.showData())
imdb.escribirEnFicheroJson("imdbBBDD.json");
var loadedIMDB = imdb_1.Imdb.obtenerInstanciaIMDB("imdbBBDD.json");
console.log('peliculas cargadas desde el archivo JSON:');
loadedIMDB.peliculas.forEach(function (movie) { return movie.showData(); });
console.log(loadedIMDB.showData);
