import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductsComponent
  ],
  // El routing se importa
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    FontAwesomeModule
  ]
})
export class ProductsModule { }
