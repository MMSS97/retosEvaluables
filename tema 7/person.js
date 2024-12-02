

class Person {
    constructor (nombre, apellido, colorDePelo, colorDeOjos,peso, altura, anyoDeNacimiento, hobbies){
        this.nombre=nombre
        this.apellido=apellido
        this.colorDePelo=colorDePelo
        this.colorDeOjos=colorDeOjos
        this.peso=peso
        this.altura=altura
        this.anyoDeNacimiento=anyoDeNacimiento
        this.hobbies=hobbies
    }
imc(){
    return this.peso/(this.altura*this.altura)*10000
}
edad(){return 2024-this.anyoDeNacimiento}
printAll(){return "nombre:"+" -"+this.nombre + "\napellido:"+" -"+this.apellido + "\ncolor de pelo:"+" -"+this.colorDePelo+ "\ncolor de ojos:"+" -"+this.colorDeOjos+ "\npeso:"+" -"+this.peso+ "\naltura:"+" -"+this.altura
}
printHobbies(){return this.hobbies}
}
// let persona1= new Person("marcos","jimenes","castaño","azules",68,170,1998,["nadar","jugar ajedrez","senderismo"])
// let persona2= new Person("Irene","Mosca","rubio","azules",50,160,1980)
// let persona3= new Person("Ricardo","alonso","negro","negros",60,158,1996)
// console.log(persona1)
// console.log(persona2)
// console.log(persona3)
// console.log(persona1.imc())
// console.log(persona2.edad())
// console.log(persona1.printAll())
// console.log(persona1)

module.exports={Person}