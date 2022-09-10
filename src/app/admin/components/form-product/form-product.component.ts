import { Component, OnInit } from '@angular/core';

// FIXME: CREANDO EL FORMULARIO DE PRODUCTOS
// TODO: FormGroup - es un grupo de controles
// TODO: FormBuilder - es una extensión de Angular, que nos sirve para crear ese grupo rápidamente
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form!: FormGroup;

  constructor (private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
        // TODO: Todos los formControl necesitamos
        id: ['', [Validators.required]],
        title: ['', [Validators.required]],
        price: ['', [Validators.required]],
        image: [''],
        description: ['', [Validators.required]]
    });
  }
}
