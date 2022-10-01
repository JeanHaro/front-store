import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';

// Modulos
import { ProductsRoutingModule } from './products-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// TODO: Material Module - Angular Material
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductsComponent
  ],
  // El routing se importa
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FontAwesomeModule,
    MaterialModule
  ]
})
export class ProductsModule { }
