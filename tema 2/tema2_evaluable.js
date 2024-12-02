let persona = {
    nombre: "Juan",
    apellido: ["Sanchez", "Rodriguez"],
    edad: 20,
    padres: [
        {
            nombre: "Julio",
            apellido: ["Sanchez", "Picuan"],
            edad: 45,
            padres: [
                {
                    nombre: "Juan Carlos",
                    apellido: ["Sanchez", "Alvarez"],
                    edad: 73,
                    padres: [
                        { nombre: "Jose" },
                        { nombre: "Josefa" }
                    ]
                },
                {
                    nombre: "Celina",
                    apellido: ["Picuan", "Dos Santos"],
                    edad: 77,
                    padres: [
                        { nombre: "Julio" },
                        { nombre: "Ruth" }
                    ]
                }
            ]
        },
        {
            nombre: "Julieta",
            apellido: ["Rodriguez", "Ventura"],
            edad: 43,
            padres: [
                {
                    nombre: "Arturo",
                    apellido: ["Rodriguez", "Morata"],
                    edad: 77,
                    padres: [
                        { nombre: "Julian" },
                        { nombre: "Carina" }
                    ]
                },
                {
                    nombre: "Maria",
                    apellido: ["Ventura", "Prieto"],
                    edad: 78,
                    padres: [
                        { nombre: "Mario" },
                        { nombre: "Julia" }
                    ]
                }
            ]
        }
    ]
};

console.log(persona.padres[1].padres[0].nombre)
console.log(persona.padres[0].padres[1].apellido)
console.log(persona.padres[1].edad+persona.padres[0].padres[0].edad)
let intercambiopadre=persona.padres[0].padres[0].edad
let intercambiomadre=persona.padres[0].padres[1].edad
console.log(intercambiopadre)
persona.padres[1].padres[1].apellido.push(persona.padres[0].padres[0].apellido[1])
console.log(persona.padres[1].padres[1].apellido)
console.log(persona.padres[1].apellido.pop(0))
console.log(persona.padres[1].padres[1].apellido[1].charAt(persona.padres[1].padres[1].apellido[1].length-1))