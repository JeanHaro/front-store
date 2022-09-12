import { Component, OnInit } from '@angular/core';

// FIXME: CREANDO EL FORMULARIO DE PRODUCTOS
// TODO: FormGroup - es un grupo de controles
// TODO: FormBuilder - es una extensión de Angular, que nos sirve para crear ese grupo rápidamente
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Servicios
import { ProductsService } from 'src/app/core/services/products/products.service';

// FIXME: Validaciones personalizadas
// Utils
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form!: FormGroup;

  constructor (
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  // FIXME: AJUSTAR ESTILOS EN UN FORMULARIO
  saveProduct (event: Event) {
    // preventDefault() - quite la acción por defecto, para que no recargue la página
    event.preventDefault();
    // console.log(this.form.value);
    if (this.form.valid) {
      const product = this.form.value;

      this.productService.createProduct(product)
      .subscribe((newProduct) => {
        console.log(newProduct);
        // TODO: Una ruta que le damos
        this.router.navigate(['./admin/products'])
      });
    }
  }

  // TODO: Validación del formulario
  private buildForm() {
    this.form = this.formBuilder.group({
        // TODO: Todos los formControl necesitamos
        id: ['', [Validators.required]],
        title: ['', [Validators.required]],
        price: ['', [Validators.required, MyValidators.isPriceValid]],
        image: [''],
        description: ['', [Validators.required]]
    });
  }

  // TODO: Obtiene el precio del formulario
  get priceField() {
    return this.form.get('price');
  }
}


