import { Imdb } from "./imdb";
import { Professional } from "./professional";
import { Movie } from "./movie";
import * as readlineSync from 'readline-sync';
import {writeFileSync} from 'fs';

const imdb = Imdb.obtenerInstanciaIMDB('imdbBBDD.json');
console.log('ingrese los datos del nuevo profesional:');
const name = readlineSync.question("Nombre: ");
const age = parseInt(readlineSync.question('Edad: '));
const weight = parseFloat(readlineSync.question('Peso: '));
const height = parseFloat(readlineSync.question('Altura: '));
const isRetired = readlineSync.question('¿Está retirado? (true/false): ') === 'true';
const nationality = readlineSync.question('Nacionalidad: ');
const oscarNumber = parseInt(readlineSync.question('Número de oscars: '));
const profession = readlineSync.question('Profesión: ');

const newProfessional= new Professional (name, age, weight, height, isRetired, nationality, oscarNumber, profession);

console.log('\n películas disponibles: ')
imdb.showData().forEach((movie, index) => {
    console.log(`${index + 1}. ${movie.title}`);
});
const movieIndex = parseInt(readlineSync.question('\n Seleccione la pelicula a la que quiere añadir el profesional: '), 10) -1;
if (movieIndex >= 0 && movieIndex < imdb.showData().length) {
    const selectedMovie = imdb.showData()[movieIndex];
    selectedMovie.actor.push(newProfessional);
    imdb.escribirEnFicheroJson('imdbBBDD.json');
    console.log(`el actor ${name} se ha añadido a los actores de la pelicula "${selectedMovie.title}".`)
} else {
    console.log('no se ha hecho ninguna adición, operación inválida.');
}


