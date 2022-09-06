import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { LoginComponent } from './components/login/login.component';

// Rutas
const routes: Routes = [
  // Ruta inicial
  // Es el elemento inicial con el que va a iniciar el modulo
  {
    path: '',
    component: LoginComponent
  }
]

@NgModule({
  // Tiene metadata que son las rutas
  imports: [
    // rutas en especifico con forChild
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
