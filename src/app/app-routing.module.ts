import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

// Layout
import { LayoutComponent } from './layout/layout.component';

// Guardian
import { AdminGuard } from './admin.guard';

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
        
        // TODO: Cargar un módulo dinámicamente
        // TODO: then - nos dará una promesa, nos va a devolver el módulo del HomeModule
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
      }
    ]
  },
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    // TODO: Con doble asterisco es que no hubo match y mostrará el componente page-not-found
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
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
