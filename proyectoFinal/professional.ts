export class Professional {
    public name: string
    public age: number 
    public weight: number 
    public height: number 
    public isRestired: boolean
    public nacionality: string
    public oscarsNumber: number
    public profession: string
    constructor(
        name: string,
        age: number, 
        weight: number, 
        heaight: number, 
        isRetired: boolean, 
        nacionality: string, 
        oscarsNumber: number, 
        profession: string
    ){
        this.name=name
        this.age=age
        this.weight=weight
        this.height=heaight
        this.isRestired=isRetired
        this.nacionality=nacionality
        this.oscarsNumber=oscarsNumber
        this.profession=profession
    }
    public toString(): string {
        return "nombre: -"+ this.name + "\n" +"edad: -"+this.age+ "\n" +"peso: -"+this.weight+ "\n" +"altura: -"+this.height+ "\n" +"¿está retirado?: -"+this.isRestired+ "\n" +"nacionalidad: -"+this.nacionality+ "\n" +"numero de oscars: -"+this.oscarsNumber+ "\n" +"profesion: -"+this.profession
    }
}