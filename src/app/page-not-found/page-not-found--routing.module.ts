import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Componentes
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  // Ruta inicial
  // Es el elemento inicial con el que va a iniciar el modulo
  {
    path: '',
    component: PageNotFoundComponent
  }
]

@NgModule({
  // Tiene metadata que son las rutas
  imports: [
    // rutas en específico con forChild
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PageNotFoundRoutingModule { }
