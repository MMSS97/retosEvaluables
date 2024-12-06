let persona0={nombre: "Danna",
    apellido:"Castro",
    anyoDeNacimiento:1977,
    aficiones:["cantar", "bailar", "escribir"],
    dni:{anyoExpedicion:2018,lugarNacimiento:"Colombia, Bogota"},
    colorPelo:"castaño"
};
let persona1={nombre: "Juliet",
    apellido:"Jaimes",
    anyoDeNacimiento:2017,
    aficiones:["cuidar niños", "jugar ping pong", "hablar con amigos"],
    dni:{anyoExpedicion:2019,lugarNacimiento:"España, Extremadura"},
    colorPelo:"rojo"
};
let persona2={nombre: "Valeria",
    apellido:"Gimenez",
    anyoDeNacimiento:1997,
    aficiones:["cocinar", "jugar billar", "molestar a sus hemanas"],
    dni:{anyoExpedicion:2018,lugarNacimiento:"España, Madrid"},
    colorPelo:"rubio"
};
let persona3={nombre: "Rocio",
    apellido:"Malpica",
    anyoDeNacimiento:1999,
    aficiones:["fumigar","conducir", "comer"],
    dni:{anyoExpedicion:1999,lugarNacimiento:"España, Segovia"},
    colorPelo:"negro"
};
let personas=[persona0,persona1,persona2,persona3];

for (let datos in persona0){
    console.log(datos)
    console.log(persona0[datos])
}

for (let persona of personas){
    console.log(persona)
}


for (let datos=0;datos<personas.length;datos++){
    console.log(personas[datos])
}

let datos=0
while (datos<personas.length){
    console.log(personas[datos])
    datos++
}
for (let i=0;i<personas.length;i++){
if (personas[i].anyoDeNacimiento>1978 && personas[i].anyoDeNacimiento<2000){
    console.log(personas[i].nombre + " tu edad esta entre 40 y 20 años")
}
else if (personas[i].anyoDeNacimiento<1978){console.log(personas[i].nombre + " tu eres mayor de 40 años")}
else {console.log(personas[i].nombre + " eres menor de 20 años")}
}
let i=0;
while (i<personas.length){
    if (personas[i].anyoDeNacimiento>1978 && personas[i].anyoDeNacimiento<2000){
        console.log(personas[i].nombre + " tu edad esta entre 40 y 20 años")
    }
    else if (personas[i].anyoDeNacimiento<1978){console.log(personas[i].nombre + " tu eres mayor de 40 años")}
    else {console.log(personas[i].nombre + " eres menor de 20 años")}
    i++
}
for (let persona of personas){
    if (persona.anyoDeNacimiento<2000  && persona.anyoDeNacimiento>1978){
        console.log(persona.nombre + " tu edad esta entre 20 y 40 años")
    }
    else if (persona.anyoDeNacimiento<1978){
        console.log(persona.nombre + " eres mayor de 40 años")
    }
    else {console.log(persona.nombre + " eres menor de 20 años")}
}
for (let persona of personas){
    persona.aficiones.push("jugar a la play");
    console.log(persona);
}