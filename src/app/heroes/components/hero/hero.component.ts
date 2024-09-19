import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:  string = 'Ironman';
  public age:   number = 45;

  //los getter son propiedades
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  //metodo
  getHeroDescription():string{
    return `${this.name}  - ${this.age}`
  }

  changeHero():void{
    this.name='Spiderman'
  }

  changeAge():void{
    this.age=25;
  }

  resetForm():void{
    this.name = 'ironman';
    this.age  = 45;

    //no es correcto
   /* document.querySelectorAll('h1')!.forEach(
    element => {
      element.innerHTML = '<h1>Desde angular</h1>'
    })*/
  }

}
