// FIXME: EDITAR UN PRODUCTO A TRAVÉS DE UN FORMULARIO
import { Component, OnInit } from '@angular/core';

// TODO: FormGroup - es un grupo de controles
// TODO: FormBuilder - es una extensión de Angular, que nos sirve para crear ese grupo rápidamente
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// Observable
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

// Firebase
import { AngularFireStorage } from '@angular/fire/compat/storage';

// Servicios
import { ProductsService } from 'src/app/core/services/products/products.service';

// Models
import { Product } from 'src/app/core/models/product.model';

// Utils
import { MyValidators } from 'src/app/utils/validators';

// Font Awesome
import { faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  // Variables
  form!: FormGroup;
  id!: string;
  product!: Product;
  image$!: Observable<any>;
  nameImage!: string;

  // Icono
  faImage = faImage;

  constructor (
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private storage: AngularFireStorage
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.fetchProduct(this.id);
      this.productService.getProduct(this.id)
      .subscribe(product => {
        this.form.patchValue(product);
      })
    })
  }

  // Guardar producto
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

  // FIXME: SUBIENDO UNA IMAGEN A FIREBASE STORAGE
  // TODO: Cargar archivo
  uploadFile (event: Event) {
    // Archivo
    // TODO: Como solo pedimos un ardchivo pedimos en la posición 1
    const target = event.target as HTMLInputElement;
    // TODO: Ve que el archivo sea de tipo archivo o file
    const file: File = (target.files as FileList)[0];
    // TODO: Para que salga con nombre la imagen
    const name = file.name;
    this.nameImage = name;
    // TODO: Referencia del archivo
    const fileRef = this.storage.ref(name);
    // TODO: Suba un archivo en la carpeta name, y le mandamos el archivo (file)
    const task = this.storage.upload(name, file);
  
    // TODO: snapshotChanges - Permitir cuando finalizar
    task.snapshotChanges()
    .pipe(
      // TODO: Cuando finaliza
      // Obtener la URL
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          console.log(url);
          this.form.get('image')?.setValue(url); // Obtener el valor de la URL
        })
      })
    )
    // TODO: Para que se procese
    .subscribe();
  }

  // TODO: Validación del formulario
  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  // Obtener datos
  dataForm() {
    this.form = this.formBuilder.group({
      title: [this.product.title, [Validators.required]],
      price: [this.product.price, [Validators.required, MyValidators.isPriceValid]],
      image: [this.product.image, [Validators.required]],
      description: [this.product.description, [Validators.required]]
    })

    let img = document.getElementById('image-edit');

    img?.setAttribute('src', this.product.image);
  }

  // TODO: Obtiene el precio del formulario, permite realizar las validaciones
  get priceField() {
    return this.form.get('price');
  }

  // Obtiene el producto mediante su id
  private fetchProduct (id: string) {
    this.productService.getProduct(id)
    // Subscribirnos para recibir la respuesta
    .subscribe(product => {
      const products = Object.entries(product);
      this.product = products[1][1];
      this.dataForm();
    })
  }
}
