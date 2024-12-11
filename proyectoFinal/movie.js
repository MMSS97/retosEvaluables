"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movie = void 0;
var movie = /** @class */ (function () {
    function movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    movie.prototype.showData = function () {
        return "titulo: -" + this.title + "\n" + "año de lanzamineto: -" + this.releaseYear + "\n" + "guionista: -" + this.writter + "\n" + "idioma: -" + this.lenguage + "\n" + "plataforma: -" + this.plataforma + "\n" + "es MCU: -" + this.isMCU + "\n" + "personaje principal: -" + this.mainCharacterName + "\n" + "productor: -" + this.producer + "\n" + "distribuidor: -" + this.distributor + "\n" + "genero: -" + this.genre;
    };
    return movie;
}());
exports.movie = movie;
