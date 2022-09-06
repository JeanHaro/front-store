import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { LoginComponent } from './components/login/login.component';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  // Acá estarán los componentes
  declarations: [
    LoginComponent
  ],
  // El routing se importa
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
