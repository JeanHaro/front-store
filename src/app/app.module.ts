// FIXME: PREPARAR EL PROYECTO PARA LAZY LOADING
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Para que funcione el [ngModel]
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Pipes
import { ExponentialPipe } from './exponential.pipe';

// Directivas
import { HighlightDirective } from './highlight.directive';

//  FIXME: QUE SON LOS COMPONENTES Y DECORADORES
// TODO: Componentes - Para que Angular reconozca que es un componente como parte de su aplicación
import { ProductComponent } from './components/product.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

// Modulos
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ExponentialPipe,
    HighlightDirective,
    ProductsComponent,
    ContactComponent,
    DemoComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
