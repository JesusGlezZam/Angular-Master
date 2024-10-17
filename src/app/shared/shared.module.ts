import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    //se exporta para que pueda verse en el modulo o se pueda utilizar desde el componente principal
    SidebarComponent,
    LazyImageComponent
  ]
})
export class SharedModule { }
