import { Component, OnInit } from '@angular/core';

// FIXME: CREANDO EL DETALLE DE CADA PRODUCTO
// TODO: ActiveRoute - inyección de dependencia
// TODO: Params - es de tipado
import { ActivatedRoute, Params } from '@angular/router';

// TODO: Servicios
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor (private route: ActivatedRoute, private productService: ProductsService) { }

  // TODO: Recibir dato
  ngOnInit(): void {
    // TODO: Los parámetros que tenga en la ruta
    // TODO: Como va cambiando el id, lo que vamos hacer es subscribirnos a ese cambio
    this.route.params.subscribe((params: Params) => {
      // TODO: Todos los parámetros que tenga ese componente
      // console.log(params);
      const id = params["id"];
      // console.log(id);
      // TODO: Lo guardamos en una variable constante product
      // TODO: Verifica si es el id en los servicios
      const product = this.productService.getProduct(id);
      console.log(product);
    })
  }
}
