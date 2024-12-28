import { imdb } from "./imdb";
import { myMovies } from "./movieTest";

const imdb1= new imdb(myMovies)
console.log(imdb1.showData())
console.log(JSON.stringify(imdb1));
import {writeFileSync, readFileSync} from "fs"; 
writeFileSync("imdbBBDD.json", JSON.stringify(imdb1))
let fs = require('fs');
fs.readFileSync



