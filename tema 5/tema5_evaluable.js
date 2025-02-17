//Funciones
let numero=[]
const myFunc = (n,m) =>
{
for (i=1;i<=n;i++){let random= Math.floor(Math.random()*m)
    numero.push(random)
}return numero
};

// console.log(myFunc(4,6));
// let v1=[22,1,4,3,1,2,2];
// let v2=[43,44,33,5,4,3,2];

function sumaV (v1,v2)  
{   let suma1=0;
  let suma2=0;
  let vR=[]
  if (v1.length!=v2.length){console.log("no tienen el mismo número de sumandos")}
  else {
for (i1=0;i1<v1.length;i1++){let resultado1 = suma1+v1[i1]
  for (i2=0;i2<v2.length;i2++){let resultado2 = suma2+v2[i2]
    if (i1!=i2){"estos indices no se suman"}
    else {
    vR.push(resultado1+resultado2)
    }
  }
  
} 
} return vR
  
}

// console.log(sumaV(v1,v2));

const productoNV = (n,v)=> 
  {
    let producto = 1;
    for (i = 0; i < v.length; i++ )
    {producto = n* v[i]
      vR.push(producto)
    }return vR
  }
  // console.log(productoNV(3,v1))
const restaVector = (v1,v2) => 
  { let vR=[]
    let r1=0
    let r2=0
    if (v1.length!=v2.length){console.log("no tiene el mismo número de indice ")}
else {
  for (i1=0;i1<v1.length;i1++){ let resultado1=r1+v1[i1]
for (i2=0;i2<v2.length;i2++){ let resultado2 =r2+v2[i2]
  if (i1!=i2){"no son el mismo número de índice, no se va a operar sobre él"}
  else {
  vR.push(resultado1-resultado2)
}}

}
  } return vR}
// console.log(restaVector(v1,v2))
const productoVector = (v1,v2) =>
  {
    let p1=1
    let p2=1
    let vR=[]
    if (v1.length!=v2.length)
  {console.log("no tienen el mismo número de elementos");}

  else { for (i1=0;i1<v1.length;i1++){
    let r1=p1*v1[i1]
    {for (i2=0;i2<v2.length;i2++){
      if (i1!=i2){"no son el mismo índice, no se va a operar sobre ellos"}
      else {
      let r2=p2*v2[i2]
      vR.push(r1*r2)
    }}}

  }}return vR
  }
//   console.log(productoVector(v1,v2));

v1.forEach(function(valor1,indice1){
  if (v1.length!=v2.length){console.log("no tiene la misma cantidad de números")}
  else {
    let vR=[]
  v2.forEach(function(valor2,indice2){
    if (indice1!==indice2){"estos índices no se suman porque no son los mismos"}
    else {let suma = valor1+valor2;
      vR.push(suma)
      console.log(vR);
    }
  })
}})

let miSuma= v1.map(function(valor1){
  if (v1.length!=v2.length){console.log("no tienen el mismo número de índices")}
  else { 
  v2.map(function(valor2){
    return valor1 +valor2
  })
}})
console.log(miSuma);
let myNounVector=v1.filter(function(value)
{return value%2==0})
console.log(myNounVector);
let reduccionVector=v1.reduce(function(accumulator,value)
{return accumulator+value
})
console.log(reduccionVector)

module.exports={myFunc,sumaV,productoNV,restaVector,productoVector}