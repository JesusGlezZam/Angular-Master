import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() //Se agrega este decorador para recibir desde el exterior
  public characterList: Character[] =[
    {
      name:'Trunks',
      power:10
    }
  ]

  @Output()  //: Define una salida del componente que el componente padre puede suscribirse para escuchar
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string):void {
    // TODO: Emitir el ID del personaje
    if(!id) return;

    this.onDelete.emit(id);
    console.log({id})
  }

}
