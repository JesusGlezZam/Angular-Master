import { Component,  } from "@angular/core";


//Snipet, para crear un componente @a-component
@Component({
   selector: 'app-counter', // debe tener un sufijo para indicar que es un componente personalizado app-
   template:`
   <h3>Counter: {{counter}}</h3>

   <button (click)="increaseBy(+1)">+1</button>
   <button (click)="resetCounter()">Reset</button>
   <button (click)="increaseBy(-1)">-1</button>`
})  //Se tranforma en componente de angular/core
export class CounterComponent{

  public counter: number= 10;

  increaseBy(value: number):void{
      this.counter+=value;
    }

   resetCounter(){
    this.counter=10
   }
}




