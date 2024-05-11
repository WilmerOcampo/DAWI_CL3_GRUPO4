import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-pregunta4',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './pregunta4.component.html',
  styleUrl: './pregunta4.component.scss'
})
export class Pregunta4Component {

  nota1: number = 0;
  nota2: number = 0;
  nota3: number = 0;
  resultado: string = "";

  calcularPromedio(): void {
    let suma = this.nota1 + this.nota2 + this.nota3;
    let promedio = suma / 3;

    this.resultado = promedio >= 70 ? 'Aprobado' : 'Reprobado';
  }

}
