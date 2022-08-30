import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

// Componentes
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

// FIXME: CREANDO EL MÓDULO DEL WEBSITE CON VISTAS ANIDADAS
// Layout
import { LayoutComponent } from './layout/layout.component';

// FIXME: CREANDO RUTAS EN ANGULAR
// TODO: Creando rutas en el Array vacío []
const routes: Routes = [
  {
    path: '',
    // TODO: Que este componente tenga un Layout
    component: LayoutComponent,
    // TODO: Hijos del layout
    children: [
      {
        // TODO: Cuando no haya path, redireccione al home
        path: '',
        // TODO: Redirección
        redirectTo: '/home',
        // TODO: Cuando tengamos la url en seco, sin ningún path
        pathMatch: 'full',
      },
       // TODO: Una ruta es un objeto
      {
        // TODO: La página de la ruta
        path: 'home',
        // TODO: Enlazar componentes
        /* TODO: Es una manera, también podríamos empezar a crear rutas por cada uno de los 
        componentes de nuestra página */
        // component: HomeComponent
        
        // FIXME: IMPLEMENTACIÓN DEL LAZY LOADING
        // TODO: Cargar un módulo dinámicamente
        // TODO: then - nos dará una promesa, nos va a devolver el módulo del HomeModule
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        // FIXME: CREANDO EL DETALLE DE CADA PRODUCTO
        path: 'products/:id',
        component: ProductDetailComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
    ]
  },
  // FIXME: USANDO routerLink Y routerActive
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
  imports: [RouterModule.forRoot(routes, {
    // TODO: Estrategia de precarga
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
