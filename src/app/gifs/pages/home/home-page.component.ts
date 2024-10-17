import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/git.interface';


@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})

export class HomePageComponent {

  //inyeccion de servicio
  constructor(private gifService: GifsService){}

  // Getter que devuelve la lista de GIFs del servicio
  get gifs(): Gif[] {
    return this.gifService.gifList; // Devuelve la lista de GIFs almacenada en el servicio
  }
}
