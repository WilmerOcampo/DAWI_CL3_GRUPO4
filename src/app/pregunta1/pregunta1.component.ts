import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pregunta1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pregunta1.component.html',
  styleUrl: './pregunta1.component.scss'
})
export class Pregunta1Component {

  multiplicacion={
    precio : 0,
    cantidad : 0,
    resultado:0
  }
  mr = false

  calcularMultiplicacion(){
    this.multiplicacion.resultado =Number(this.multiplicacion.cantidad) * Number(this.multiplicacion.precio)
    this.mr= true
  }

}
