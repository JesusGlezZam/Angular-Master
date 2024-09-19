import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/counter.module';
import { HeroListModule } from './heroes/components/hero-list.module';

import { AppComponent } from './app.component';

//import { CounterComponent } from './counter/counter.component';
//import { HeroComponent } from './heroes/components/hero/hero.component';
//import { ListComponent } from './heroes/components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    //CounterComponent,
    //HeroComponent,
    //ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
