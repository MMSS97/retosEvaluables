"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myProfessionals = exports.professional2 = void 0;
var professional_1 = require("./professional");
var professional1 = new professional_1.Professional("antonio Dicaprio", 44, 70, 188, false, "EEUU", 1, "actor");
// console.log(professional1.toString())
exports.professional2 = new professional_1.Professional("orlando bloom", 33, 67, 169, false, "british", 4, "actor");
var professional3 = new professional_1.Professional("angelina Jolie", 44, 54, 156, false, "alemania", 3, "actriz");
exports.myProfessionals = [professional1, exports.professional2, professional3];
