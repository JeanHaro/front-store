// FIXME: PREPARAR EL PROYECTO PARA LAZY LOADING
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Para que funcione el [ngModel]
import { FormsModule } from '@angular/forms';

// FIXME: CREANDO NUESTROS PROPIOS SERVICIOS: HTTP CLIENT 
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//  FIXME: QUE SON LOS COMPONENTES Y DECORADORES
// TODO: Componentes - Para que Angular reconozca que es un componente como parte de su aplicación
import { CartComponent } from './cart/cart.component';
import { LayoutComponent } from './layout/layout.component';

// Modulos
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// FIXME: CREANDO UN SHARED MODULE Y CORE MODULE
import { SharedModule } from './shared/shared.module'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
