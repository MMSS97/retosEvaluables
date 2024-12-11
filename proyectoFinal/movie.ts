import { Professional } from "./professional"

export class movie {
    public title: string
    public releaseYear: number 
    public actor: Professional[]
    public nacionality: string
    public director: Professional[]
    public writter: Professional[]
    public lenguage: string
    public plataforma: string
    public isMCU: boolean
    public mainCharacterName: string
    public producer: string
    public distributor: string
    public genre: string
    constructor(title:string, releaseYear: number, nacionality: string, genre: string){
        this.title=title
        this.releaseYear=releaseYear
        this.nacionality=nacionality
        this.genre=genre
    }
    public showData():string{
        return "titulo: -"+this.title+"\n" +"año de lanzamineto: -"+this.releaseYear+"\n" +"guionista: -"+ this.writter+"\n" +"idioma: -"+this.lenguage+"\n" +"plataforma: -"+this.plataforma+"\n" +"es MCU: -"+this.isMCU+"\n" +"personaje principal: -"+this.mainCharacterName+"\n" +"productor: -"+this.producer+"\n" +"distribuidor: -"+this.distributor+"\n" +"genero: -"+this.genre
    }
}