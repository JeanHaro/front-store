import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// FIXME: CREANDO UN SHARED MODULE Y CORE MODULE
// Componentes  
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// Directivas
import { HighlightDirective } from './directives/highlight/highlight.directive';

// Pipes
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';

// Modulos
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// FIXME: CREANDO EL HEADER
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    MaterialModule
  ],
  exports: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
