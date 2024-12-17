import { imdb } from "./imdb";
import { myMovies } from "./movieTest";

const imdb1= new imdb(myMovies)
console.log(imdb1.showData())
console.log(JSON.stringify(imdb1));

