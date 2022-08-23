import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


// FIXME: CREANDO RUTAS EN ANGULAR
// TODO: Creando rutas en el Array
const routes: Routes = [
  // FIXME: USANDO routerLink Y routerActive
  {
    // TODO: Si no tiene PATH
    path: '',
    // TODO: Redirección
    redirectTo: '/home',
    // TODO: Cuando tengamos la URL en seco, sin ningún path
    pathMatch: 'full'
  },

  // TODO: Una ruta es un objeto
  {
    // TODO: La página de la ruta
    path: 'home',
    // TODO: Enlazar componentes
    /* TODO: Es una manera, también podríamos empezar a crear rutas por cada uno de los 
    componentes de nuestra página */
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    // FIXME: USANDO routerLink Y routerActive
    // TODO: Con doble asterisco es que no hubo match y mostrará el componente page-not-found
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
