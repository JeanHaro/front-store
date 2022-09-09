import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../products/components/product/product.component';
import { NavComponent } from './components/nav/nav.component';

// FIXME: CREANDO VISTAS CON ANGULAR SHEMATIC
// TODO: Componentes
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

// Rutas
const routes: Routes = [
  {
    // Vacío para que enlace solamente cuando esté /admin
    path: '',
    component: NavComponent,
    // Vista anidada
    children: [
      {
        // Cuando hagamos create, va a abrir el producto ProductFormComponent
        path: 'create',
        component: ProductFormComponent
      },
      // FIXME: LISTA DE INVENTARIO Y DETALLE
      {
        path: 'products',
        component: ProductsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
