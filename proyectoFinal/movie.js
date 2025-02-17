"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
var professionalTest_1 = require("./professionalTest");
var professionalTest_2 = require("./professionalTest");
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
        this.actor = professionalTest_1.myProfessionals;
        this.writter = professionalTest_2.professional2;
        this.director = professionalTest_2.professional2;
        this.mainCharacterName = "rocky";
        this.producer = "amazon";
        this.distributor = "amazon";
        this.plataforma = "amazon video";
        this.isMCU = false;
        this.lenguage = "español";
    }
    Movie.prototype.showData = function () {
        return "titulo: -" + this.title + "\n" + "año de lanzamineto: -" + this.releaseYear + "\n" + "actor/actriz: -" + this.actor + "\n" + "guionista: -" + this.writter + "\n" + "idioma: -" + this.lenguage + "\n" + "plataforma: -" + this.plataforma + "\n" +
            "es MCU: -" + this.isMCU + "\n" + "personaje principal: -" + this.mainCharacterName + "\n" + "productor: -" + this.producer + "\n" +
            "distribuidor: -" + this.distributor + "\n" + "genero: -" + this.genre;
    };
    return Movie;
}());
exports.Movie = Movie;
