import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pregunta2',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pregunta2.component.html',
  styleUrl: './pregunta2.component.scss'
})
export class Pregunta2Component {
  montoPrestamo: number=0;
  cuotas: number=0;
  valorCuota: number=0;

  calcularCuotas(): void {
    let interes: number;

    if (this.montoPrestamo > 5000) {
      this.cuotas = 3;
    } else if (this.montoPrestamo < 1000) {
      this.cuotas = 1;
    } else if (this.montoPrestamo >= 2000 && this.montoPrestamo <= 3000) {
      this.cuotas = 2;
    } else {
      this.cuotas = 5;
    }

    if (this.montoPrestamo < 4000) {
      interes = 0.12;
    } else {
      interes = 0.10;
    }

    let totalDeuda = this.montoPrestamo + (this.montoPrestamo * interes);
    this.valorCuota = totalDeuda / this.cuotas;
  }
}
