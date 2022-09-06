import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

// Rutas
const routes: Routes = [
  // Ruta inicial
  // Es el elemento inicial con el que va a iniciar el modulo
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: ':id',
    component: ProductDetailComponent
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
export class ProductsRoutingModule { }
