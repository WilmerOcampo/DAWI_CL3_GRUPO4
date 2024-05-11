import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterOutlet} from "@angular/router";
import {NavegacionComponent} from "../navegacion/navegacion.component";

@Component({
  selector: 'app-pregunta3',
  standalone: true,
  imports: [
    [CommonModule],
    [FormsModule],
    RouterOutlet,
    NavegacionComponent
  ],
  templateUrl: './pregunta3.component.html',
  styleUrls: ['./pregunta3.component.scss']
})
export class Pregunta3Component {
  precioUnitario: number = 0;
  cantidad: number = 0;
  precioTotal: number = 0;

  calcularPrecioTotal(): void {
    if (this.cantidad > 20) {
      this.precioTotal = this.precioUnitario * this.cantidad * 0.9;
    } else if (this.cantidad > 10) {
      this.precioTotal = this.precioUnitario * this.cantidad * 0.95;
    } else {
      this.precioTotal = this.precioUnitario * this.cantidad;
    }
  }
}
