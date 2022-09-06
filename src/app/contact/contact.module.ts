import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { ContactComponent } from './components/contact/contact.component';

// Modulos
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ContactModule { }
