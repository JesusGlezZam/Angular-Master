import { Component, Input, OnInit } from '@angular/core';

// Definición del componente LazyImageComponent
@Component({
  selector: 'shared-lazy-image', // Selector para usar el componente en plantillas HTML
  templateUrl: './lazy-image.component.html', // Ruta al archivo de plantilla HTML
})
export class LazyImageComponent implements OnInit {

  // Propiedad de entrada para recibir la URL de la imagen desde el componente padre
  @Input()
  public url!: string; // El signo de exclamación indica que esta propiedad es obligatoria

  // Propiedad de entrada para recibir el texto alternativo de la imagen
  @Input()
  public alt!: string; // También es obligatoria

  // Bandera que indica si la imagen ha sido cargada
  public hasLoaded: boolean = false;

  // Método del ciclo de vida que se llama al inicializar el componente
  ngOnInit(): void {
    // Verifica si la propiedad URL ha sido proporcionada
    if (!this.url) throw new Error('URL property is required.');
  }

  // Método que se llama cuando la imagen se ha cargado exitosamente
  onLoad() {
    console.log('Image Loaded'); // Mensaje en la consola para indicar que la imagen ha cargado
    this.hasLoaded = true; // Actualiza la bandera hasLoaded a true
  }
}
