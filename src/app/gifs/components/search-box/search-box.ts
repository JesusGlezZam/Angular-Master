import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar:</h5>
  <input type="text"
          class="form-control"
          placeholder="Buscar gifs"
          (keyup.enter)="searchTag()"
          #txtTagInput
          >
  `


})
//<!-- (keyup.enter)="searchTag( txtTagInput.value)" -  esto va en el input->
export class SearchBoxComponent {
   // @ViewChild permite acceder a un elemento del DOM en la plantilla
   @ViewChild('txtTagInput')
   tagInput!: ElementRef<HTMLInputElement>; // Referencia al elemento input


  // Inyección de dependencias para el servicio GifsService
  constructor(private gifsService: GifsService) {}

  /*
   * Este método busca un nuevo tag al hacer clic o presionar Enter.
   * Elimina el valor del input después de realizar la búsqueda.
   */
  searchTag() {
    const newTag = this.tagInput.nativeElement.value; // Obtiene el valor del input
    this.gifsService.searchTag(newTag); // Llama al método searchTag del servicio con el nuevo valor

    this.tagInput.nativeElement.value = ''; // Limpia el input después de buscar

    console.log({ newTag });
  }
 /* //Esto era para validar cuando se le diera enter, iba a mandar hasta ese momento el servicio (keyup.enter)="searchTag( txtTagInput.value)"  esto va dentro del input
    searchTag( newTag: string){
    console.log({newTag})
  }*/

}
