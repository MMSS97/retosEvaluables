"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myMovies = void 0;
var movie_1 = require("./movie");
var movie1 = new movie_1.Movie("tomb raider", 2000, "EEUU", "accion");
// console.log(movie1.showData());
var movie2 = new movie_1.Movie("seven nation army", 2025, "EEUU", "psicologica");
var movie3 = new movie_1.Movie("Drive", 2025, "EEUU", "accion");
exports.myMovies = [movie1, movie2, movie3];
