"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, weight, heaight, isRetired, nacionality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = heaight;
        this.isRestired = isRetired;
        this.nacionality = nacionality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    Professional.prototype.toString = function () {
        return "nombre: -" + this.name + "\n" + "edad: -" + this.age + "\n" + "peso: -" + this.weight + "\n" + "altura: -" + this.height + "\n" + "¿está retirado?: -" + this.isRestired + "\n" + "nacionalidad: -" + this.nacionality + "\n" + "numero de oscars: -" + this.oscarsNumber + "\n" + "profesion: -" + this.profession;
    };
    return Professional;
}());
exports.Professional = Professional;
