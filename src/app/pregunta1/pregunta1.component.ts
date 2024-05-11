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
    rcondescuento:0,
    rsindescuento:0
  }
  mr = false

  calcularMultiplicacion(){
    this.multiplicacion.rsindescuento = 0;
    this.multiplicacion.rcondescuento = 0;
    var resultadomomentaneo = Number(this.multiplicacion.cantidad) * Number(this.multiplicacion.precio)
    if(resultadomomentaneo > 200){
      var descuento = resultadomomentaneo * 0.20
      resultadomomentaneo -= descuento
      this.multiplicacion.rcondescuento = resultadomomentaneo
    }
    this.multiplicacion.rsindescuento = Number(this.multiplicacion.cantidad) * Number(this.multiplicacion.precio)
    this.mr= true
  }

}
