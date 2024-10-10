import { Component } from '@angular/core';
import { DBZService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  //constructor(public dbzService:DBZService){}
  constructor(private dbzService:DBZService){}

  get characters(): Character[]{
    return [...this.dbzService.characters]
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id)
  }

  onNewCharacter(character: Character):void{
    this.dbzService.addCharacter(character);
  }


}
