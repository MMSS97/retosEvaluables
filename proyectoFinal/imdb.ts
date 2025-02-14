import { Movie } from "./movie";
import {writeFileSync, readFileSync} from 'fs'

export class Imdb{
    public peliculas : Movie[]
    constructor(peliculas:Movie[]){
        this.peliculas= peliculas
    }
    public showData(){
        return this.peliculas
    } 
    public toJson(): string {
        return JSON.stringify(this);
    }
    
    public escribirEnFicheroJson(nombreFichero: string): void {
        const jsonString = this.toJson();
        writeFileSync(nombreFichero, jsonString, 'utf8');
    }
    public static obtenerInstanciaIMDB(nombreFichero: string): Imdb{
        const jsonString = readFileSync(nombreFichero, 'utf8');
        const data = JSON.parse(jsonString);
        const peliculas= data.peliculas.map((movieData: any) => {
            const movie = new Movie (movieData.title, movieData.releaseYear, movieData.nationality, movieData.genre);
            Object.assign(movie, movieData);
            return movie;
        })        
        return new Imdb(peliculas)
    }

    
}
