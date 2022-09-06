import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { ContactComponent } from './components/contact/contact.component';

// Rutas
const routes: Routes = [
  // Ruta inicial
  // Es el elemento inicial con el que va a iniciar el modulo
  {
    path: '',
    component: ContactComponent
  }
]

@NgModule({
  // TODO: Tiene metadata que son las rutas
  imports: [
    // rutas en especifico con forChild
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactRoutingModule { }
