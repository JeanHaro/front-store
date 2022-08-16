import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Para que funcione el [ngModel]
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//  FIXME: QUE SON LOS COMPONENTES Y DECORADORES
// TODO: Componentes - Para que Angular reconozca que es un componente como parte de su aplicación
import { ProductComponent } from './components/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
