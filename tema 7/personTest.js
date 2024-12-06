let myLib=require("./person");
let persona1= new myLib.Person("jorge","perez","castaño","azules",70,176,1997,["reir","cantar","soñar"])
console.log(persona1);
console.log(persona1.imc())
console.log(persona1.edad())
// console.log(persona1.printAll())
console.log(persona1.printHobbies())