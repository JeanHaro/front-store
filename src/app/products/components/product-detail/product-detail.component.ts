import { Component, OnInit } from '@angular/core';

// TODO: ActiveRoute - inyección de dependencia
// TODO: Params - es de tipado
import { ActivatedRoute, Params } from '@angular/router';

// TODO: Servicios
import { ProductsService } from 'src/app/core/services/products/products.service';

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

  // Variable
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

  // Obtener los valores de un producto
  fetchProduct (id: string) {
    this.productService.getProduct(id)
    // Subscribirnos para recibir la respuesta
    .subscribe(product => {
      // Obteniendo el objeto del backend para conseguir los valores del producto
      const products = Object.entries(product);
      this.product = products[1][1];
    })
  }
}
