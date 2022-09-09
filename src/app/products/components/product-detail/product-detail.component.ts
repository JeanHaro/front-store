import { Component, OnInit } from '@angular/core';

// FIXME: CREANDO EL DETALLE DE CADA PRODUCTO
// TODO: ActiveRoute - inyección de dependencia
// TODO: Params - es de tipado
import { ActivatedRoute, Params } from '@angular/router';

// FIXME: CREANDO UN SHARED MODULE Y CORE MODULE
// TODO: Servicios
import { ProductsService } from 'src/app/core/services/products/products.service';

// FIXME: ELABORACIÓN DE LA PÁGINA DE DETALLE DE PRODUCTO
// TODO: Interfaces
import { Product } from 'src/app/core/models/product.model';

// TODO: Font Awesome
import { definition } from '@fortawesome/free-regular-svg-icons/faHeart' 
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

  constructor (private route: ActivatedRoute, private productService: ProductsService) { }

  // Icono
  faHeart = definition;

  // TODO: Recibir dato
  ngOnInit(): void {
    // TODO: Los parámetros que tenga en la ruta
    // TODO: Como va cambiando el id, lo que vamos hacer es subscribirnos a ese cambio
    this.route.params.subscribe((params: Params) => {
      // TODO: Todos los parámetros que tenga ese componente
      // console.log(params);
      const id = params["id"];
      // FIXME: HACIENDO UNA SOLICITUD GET DESDE EL SERVICIO
      this.fetchProduct(id);
      // console.log(id);
      // TODO: Lo guardamos en una variable constante product
      // TODO: Verifica si es el id en los servicios
      // TODO: ! - colocamos ese signo para darle un valor por default y corra la aplicación 
      // this.product = this.productService.getProduct(id)!;
    })
  }

  // Estilo Favorito
  activeFavorite() {
    (this.faHeart != definition) ? this.faHeart = definition : this.faHeart = faHeart;
  }

  fetchProduct (id: string) {
    this.productService.getProduct(id)
    // Subscribirnos para recibir la respuesta
    .subscribe(product => {
      this.product = product;
    })
  }

  // TODO: Crear producto
  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'Nuevo desde angular',
      image: '../../../../assets/images/banner-1.jpg',
      price: 3000,
      description: 'asdasdasd'
    };

    this.productService.createProduct(newProduct)
    // Subscribirnos para recibir la respuesta
    .subscribe(product => {
      console.log(product);
    })
  }

  // TODO: Actualizar producto
  updateProduct() {
    const updatesProduct: Partial<Product> = {
      price: 555555,
      description: 'edición título'
    };

    this.productService.updateProduct('222', updatesProduct)
    // Subscribirnos para recibir la respuesta
    .subscribe(product => {
      console.log(product);
    })
  }

  // TODO: Eliminar producto
  deleteProduct() {
    this.productService.deleteProduct('222')
    // Subscribirnos para recibir la respuesta
    .subscribe(rta => {
      console.log(rta);
    })
  }
}
