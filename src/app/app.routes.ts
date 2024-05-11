
import { Routes } from '@angular/router';
import { Pregunta3Component } from './pregunta3/pregunta3.component';
import { Pregunta1Component } from './pregunta1/pregunta1.component';
import {Pregunta4Component} from "./pregunta4/pregunta4.component";
import {NavegacionComponent} from "./navegacion/navegacion.component";
import { Pregunta2Component } from './pregunta2/pregunta2.component';

export const routes: Routes = [
    {path: '', component:Pregunta1Component},
    {path: 'pregunta4', component: Pregunta4Component},
    {path: 'navegacion', component: NavegacionComponent},
    { path: 'pregunta3',component:Pregunta3Component},
    {path: 'pregunta2',component:Pregunta2Component}
];

