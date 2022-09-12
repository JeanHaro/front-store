// FIXME: EDITAR UN PRODUCTO A TRAVÉS DE UN FORMULARIO
import { Component, OnInit } from '@angular/core';

// TODO: FormGroup - es un grupo de controles
// TODO: FormBuilder - es una extensión de Angular, que nos sirve para crear ese grupo rápidamente
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

// Servicios
import { ProductsService } from 'src/app/core/services/products/products.service';

// Utils
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form!: FormGroup;
  id!: string;

  constructor (
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.productService.getProduct(this.id)
      .subscribe(product => {
        this.form.patchValue(product);
      })
    })
  }

  saveProduct (event: Event) {
    // preventDefault() - quite la acción por defecto, para que no recargue la página
    event.preventDefault();
    // console.log(this.form.value);
    if (this.form.valid) {
      const product = this.form.value;

      this.productService.updateProduct(this.id, product)
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
