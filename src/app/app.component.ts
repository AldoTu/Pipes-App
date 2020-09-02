import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = 'Capitán América';
  nombre2 = 'alDo TuRmoN';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  porcentaje = 0.235;
  salario = 1234.5;
  fecha = new Date();
  activar = true;

  idioma = 'es';
  miroUrl = 'https://miro.com/app/embed/o9J_kpCQ5wk=/?';

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llegó la data');
    }, 4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };

}
