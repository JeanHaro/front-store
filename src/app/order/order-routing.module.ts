import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// FIXME: CREANDO LA PAGINA DE LA ORDEN Y USO DE ASYNC
// Componentes
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
