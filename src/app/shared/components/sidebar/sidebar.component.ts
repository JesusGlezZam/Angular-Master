import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'share-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  // Constructor del componente, inyecta el servicio GifsService
  constructor(private gifsService: GifsService) {}

  // Getter que devuelve el historial de etiquetas desde el servicio
  get tags(): string[] {
    return this.gifsService.tagsHistory; // Devuelve una copia del historial de etiquetas
  }

  // funcion para cuando haga click en sidebar.html por el id-tag mande el constructor gifsService
  searchTag(tag: string): void{
    this.gifsService.searchTag(tag); // Llama al método searchTag del servicio para buscar GIFs relacionados con la etiqueta
  }

}
