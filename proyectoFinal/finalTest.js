"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var imdb_1 = require("./imdb");
var professional_1 = require("./professional");
var readlineSync = require("readline-sync");
var imdb = imdb_1.Imdb.obtenerInstanciaIMDB('imdbBBDD.json');
console.log('ingrese los datos del nuevo profesional:');
var name = readlineSync.question("Nombre: ");
var age = parseInt(readlineSync.question('Edad: '));
var weight = parseFloat(readlineSync.question('Peso: '));
var height = parseFloat(readlineSync.question('Altura: '));
var isRetired = readlineSync.question('¿Está retirado? (true/false): ') === 'true';
var nationality = readlineSync.question('Nacionalidad: ');
var oscarNumber = parseInt(readlineSync.question('Número de oscars: '));
var profession = readlineSync.question('Profesión: ');
var newProfessional = new professional_1.Professional(name, age, weight, height, isRetired, nationality, oscarNumber, profession);
console.log('\n películas disponibles: ');
imdb.showData().forEach(function (movie, index) {
    console.log("".concat(index + 1, ". ").concat(movie.title));
});
var movieIndex = parseInt(readlineSync.question('\n Seleccione la pelicula a la que quiere añadir el profesional: '), 10) - 1;
if (movieIndex >= 0 && movieIndex < imdb.showData().length) {
    var selectedMovie = imdb.showData()[movieIndex];
    selectedMovie.actor.push(newProfessional);
    imdb.escribirEnFicheroJson('imdbBBDD.json');
    console.log("el actor ".concat(name, " se ha a\u00F1adido a los actores de la pelicula \"").concat(selectedMovie.title, "\"."));
}
else {
    console.log('no se ha hecho ninguna adición, operación inválida.');
}
