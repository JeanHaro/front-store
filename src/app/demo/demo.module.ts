import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Componentes
import { DemoComponent } from './components/demo/demo.component';

// Modulos
import { DemoRoutingModule } from './demo-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule,
    SharedModule
  ]
})
export class DemoModule { }
