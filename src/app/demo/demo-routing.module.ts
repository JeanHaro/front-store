import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { DemoComponent } from './components/demo/demo.component';

// Rutas
const routes: Routes = [
  // Ruta inicial
  // Es el elemento inicial con el que va a iniciar el módulo
  {
    path: '',
    component: DemoComponent
  }
]

@NgModule({
  // Tiene metadata que son las rutas
  imports: [
    // Rutas en especifico con forChild
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DemoRoutingModule { }
