import { Routes } from '@angular/router';

import { Pregunta1Component } from './pregunta1/pregunta1.component';
import {Pregunta4Component} from "./pregunta4/pregunta4.component";

export const routes: Routes = [
    {path: 'pregunta1', component:Pregunta1Component},
    {path: 'pregunta4', component: Pregunta4Component},
];
