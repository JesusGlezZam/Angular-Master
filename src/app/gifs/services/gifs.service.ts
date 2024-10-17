import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/git.interface';

// Decorador Injectable que hace que este servicio esté disponible en toda la aplicación
@Injectable({providedIn: 'root'}) //si no se tiene que proveer  en el modulo a utilizar
export class GifsService {
  public gifList: Gif[] = []; // Lista de GIFs obtenidos de la API
  private _tagsHistory: string[] = []; // Almacena el historial de búsqueda de etiquetas
  private apiKey: string = '804h0KoK34SUJ1CzJDMgPQPuROopb5XY'; // Clave de API para acceder a Giphy
  private serviceURL: string = 'https://api.giphy.com/v1/gifs'; // URL base del servicio de Giphy


  constructor(private http:HttpClient) {
      // Al construir el servicio, carga el historial desde el almacenamiento local
      this.loadLocalStorage();

   }

   // Getter que devuelve una copia del historial de etiquetas
  get tagsHistory() {
    return [...this._tagsHistory]; // Evita mutaciones directas
  }

  // Organiza el historial de etiquetas
  private organizeHistory(tag: string) {
    tag = tag.toLocaleLowerCase(); // Convierte la etiqueta a minúsculas

    // Si la etiqueta ya está en el historial, la elimina
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    // Agrega la nueva etiqueta al inicio del historial
    this._tagsHistory.unshift(tag);
    // Mantiene solo las últimas 10 etiquetas en el historial
    this._tagsHistory = this.tagsHistory.splice(0, 10);
    this.saveLocalStorage(); // Guarda el historial en el almacenamiento local
  }

    // Guarda el historial en el almacenamiento local
    private saveLocalStorage(): void {
      localStorage.setItem('history', JSON.stringify(this.tagsHistory));
    }

    // Carga el historial desde el almacenamiento local
    private loadLocalStorage(): void {
      if (!localStorage.getItem('history')) return; // Si no hay historial, sale de la función
      this._tagsHistory = JSON.parse(localStorage.getItem('history')!); // Carga el historial

      // Si hay historial, busca la primera etiqueta
      if (this._tagsHistory.length === 0) return;
      this.searchTag(this._tagsHistory[0]);
    }


  // Busca un nuevo tag en la API
  searchTag(tag: string): void {
    if (tag.length === 0) return; // Si la etiqueta está vacía, no hace nada
    this.organizeHistory(tag); // Organiza el historial con la nueva etiqueta

    // Configura los parámetros para la solicitud HTTP
    const params = new HttpParams()
      .set('api_key', this.apiKey) // Agrega la clave de API
      .set('limit', '20') // Limita los resultados a 20
      .set('q', tag); // Agrega la etiqueta de búsqueda

    // Realiza la solicitud HTTP a la API de Giphy
    this.http.get<SearchResponse>(`${this.serviceURL}/search`, { params })
      .subscribe(resp => {
        this.gifList = resp.data; // Asigna los GIFs obtenidos a la lista
        console.log({ gifs: this.gifList }); // Imprime la lista de GIFs en la consola
      });

    }

}



  //busqueda el nuevo tag
  /*async searchTag(tag:string):Promise<void>{
    if(tag.length === 0) return;
      this.organizeHistory(tag)

    const resp =  await fetch('https:api.giphy.com/v1/gifs/search?api_key=804h0KoK34SUJ1CzJDMgPQPuROopb5XY&q=Valorant&limit=10')
      const data = await resp.json();
      console.log(data)

    //Esta accion se hace dentro de la organizeHistory
    //this._tagsHistory.unshift(tag);

    /* fetch('api.giphy.com/v1/gifs/search?api_key=804h0KoK34SUJ1CzJDMgPQPuROopb5XY&q=Valorant&limit=10')
      .then(resp => resp.json())
      .then(data => console.log(data))/*

      //Esto es un observable, escuchancado lo que emite respuesta
      //this.http.get('https:api.giphy.com/v1/gifs/search?api_key=804h0KoK34SUJ1CzJDMgPQPuROopb5XY&q=Valorant&limit=10')

  }*/
