import { Component, OnInit } from '@angular/core';

// FIXME: CREANDO EL FORMULARIO DE PRODUCTOS
// TODO: FormGroup - es un grupo de controles
// TODO: FormBuilder - es una extensión de Angular, que nos sirve para crear ese grupo rápidamente
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// FIXME: SUBIENDO UNA IMAGEN A FIREBASE STORAGE
// Firebase
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

// Servicios
import { ProductsService } from 'src/app/core/services/products/products.service';

// FIXME: Validaciones personalizadas
// Utils
import { MyValidators } from 'src/app/utils/validators';

// FontAwesome
import { faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  form!: FormGroup;
  image$!: Observable<any>;
  nameImage!: string;

  faImage = faImage;

  constructor (
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage
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

    console.log(this.form.value);
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
        // TODO: Todos los formControl necesitamos
        title: ['', [Validators.required]],
        price: ['', [Validators.required, MyValidators.isPriceValid]],
        image: ['', [Validators.required]],
        description: ['', [Validators.required]]
    });
  }

  // TODO: Obtiene el precio del formulario
  get priceField() {
    return this.form.get('price');
  }
}
