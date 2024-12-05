let persona={nombre: "Danna",
    apellido:"castro",
    anyoDeNacimiento:1987,
    aficiones:["cantar", "bailar", "escribir"],
    dni:{anyoExpedicion:2018,lugarNacimiento:"Colombia, Bogota"},
    colorPelo:"castaño"
};
let persona1={nombre: "juliet",
    apellido:"jaimes",
    anyoDeNacimiento:2017,
    aficiones:["cuidar niños", "jugar ping pong", "hablar con amigos"],
    dni:{anyoExpedicion:2019,lugarNacimiento:"España, Extremadura"},
    colorPelo:"rojo"
};
let persona2={nombre: "valeria",
    apellido:"gimenez",
    anyoDeNacimiento:1992,
    aficiones:["cocinar", "jugar billar", "molestar a sus hemanas"],
    dni:{anyoExpedicion:2018,lugarNacimiento:"España, Madrid"},
    colorPelo:"rubio"
};
let persona3={nombre: "rocio",
    apellido:"malpica",
    anyoDeNacimiento:1999,
    aficiones:["fumigar","conducir", "comer"],
    dni:{anyoExpedicion:1999,lugarNacimiento:"España, Segovia"},
    colorPelo:"negro"
};
let personas=[persona,persona1,persona2,persona3];


let colorDePelo= "castaño";
if (colorDePelo==personas[0].colorPelo){console.log(personas[0].nombre)}
if (colorDePelo==personas[1].colorPelo){console.log(personas[1].nombre)}
if (colorDePelo==personas[2].colorPelo){console.log(personas[2].nombre)}
if(colorDePelo==personas[3].colorPelo){console.log(personas[3].nombre)}
else {console.log("no hay datos")}
let mayorde30=1994
if(personas[0].anyoDeNacimiento<mayorde30){console.log(personas[0].nombre)}
if(personas[1].anyoDeNacimiento<mayorde30){console.log(personas[1].nombre)}
if(personas[2].anyoDeNacimiento<mayorde30){console.log(personas[2].nombre)}
if(personas[3].anyoDeNacimiento<mayorde30){console.log(personas[3].nombre)}
else {console.log("no hay datos")};
colorDePelo="negro"
let dniCaducado=2019;
let menorEdad=2008;
let ninyos="comer"||"dormir"
if (personas[0].colorPelo==colorDePelo&&personas[0].dni.anyoExpedicion<dniCaducado||personas[0].anyoDeNacimiento>menorEdad&&personas[0].aficiones.includes(ninyos)){console.log(personas[0].dni.lugarNacimiento)}
if (personas[1].colorPelo==colorDePelo&&personas[1].dni.anyoExpedicion<dniCaducado||personas[1].anyoDeNacimiento>menorEdad&&personas[1].aficiones.includes(ninyos)){console.log(personas[1].dni.lugarNacimiento)}
if (personas[2].colorPelo==colorDePelo&&personas[2].dni.anyoExpedicion<dniCaducado||personas[2].anyoDeNacimiento>menorEdad&&personas[2].aficiones.includes(ninyos)){console.log(personas[2].dni.lugarNacimiento)}
if (personas[3].colorPelo==colorDePelo&&personas[3].dni.anyoExpedicion<dniCaducado||personas[3].anyoDeNacimiento>menorEdad&&personas[3].aficiones.includes(ninyos)){console.log(personas[3].dni.lugarNacimiento)}
else {console.log( "no hay datos")};



