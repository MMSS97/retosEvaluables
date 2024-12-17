"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var imdb_1 = require("./imdb");
var movieTest_1 = require("./movieTest");
var imdb1 = new imdb_1.imdb(movieTest_1.myMovies);
console.log(imdb1.showData());
console.log(JSON.stringify(imdb1));
