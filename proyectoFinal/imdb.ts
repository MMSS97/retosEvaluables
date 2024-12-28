import { Movie } from "./movie";

export class imdb{
    public peliculas : Movie[]
    constructor(movie:Movie[]){
        this.peliculas= movie
    }
    public showData(){
        return this.peliculas
    } 
    

    
}