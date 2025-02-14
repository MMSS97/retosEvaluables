import { Imdb } from "./imdb";
import { Movie } from "./movie";
import { myMovies } from "./movieTest";

const imdb= new Imdb(myMovies)
// console.log(imdb.showData())
imdb.escribirEnFicheroJson(`imdbBBDD.json`);
const loadedIMDB=Imdb.obtenerInstanciaIMDB(`imdbBBDD.json`)
console.log('peliculas cargadas desde el archivo JSON:');
loadedIMDB.peliculas.forEach(movie => movie.showData() );
console.log(loadedIMDB)


