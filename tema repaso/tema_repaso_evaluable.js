let oveja0={nombre:"Julia",
    color:"verde"
}
let oveja1={nombre:"Bartolona", color:"rojo"}
let oveja2={nombre:"Montse",color:"azul"}
let oveja4={nombre:"Luisa",color:"burdeos"}
let oveja3={nombre:"Sonia",color:"rojo"}
let misOvejas=[oveja0,oveja1,oveja2,oveja3,oveja4]

for (let i=0;i<misOvejas.length;i++)
    {
        if (misOvejas[i].nombre.includes("a"&&"n") && misOvejas[i].color=="rojo")
        {console.log(misOvejas[i])}
        else console.log("no hay ovejas en tu rebaño que sean rojas ni que contengan las letras n y a en sus nombres")
    }

