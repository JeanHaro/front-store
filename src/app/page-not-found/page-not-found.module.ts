import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componente
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Modulos
import { PageNotFoundRoutingModule } from './page-not-found--routing.module';

@NgModule({
  // Acá estarán los componentes
  declarations: [
    PageNotFoundComponent
  ],
  // El routing se importa
  imports: [
    CommonModule,
    PageNotFoundRoutingModule
  ]
})
export class PageNotFoundModule { }
