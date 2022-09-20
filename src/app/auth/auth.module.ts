import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  // Acá estarán los componentes
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  // El routing se importa
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
