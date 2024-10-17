import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/git.interface';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  @Input() // Decorador que permite recibir datos del componente padre
  public gifs: Gif[] = [] // Propiedad que almacenará una lista de GIFs

}
