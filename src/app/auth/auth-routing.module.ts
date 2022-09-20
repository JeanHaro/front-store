import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// Rutas
const routes: Routes = [
  // Ruta inicial
  // Es el elemento inicial con el que va a iniciar el modulo
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  // FIXME: INSTALAR ANGULAR FIREBASE Y CONFIGURAR FIREBASE AUTH
  {
    path: 'register',
    component: RegisterComponent
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
