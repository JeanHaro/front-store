import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/core/services/products/products.service';

// FIXME: CIERRE DE EJERCICIO DE DETALLE
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  
  // TODO: Esto se saca de Angular Material
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];


  constructor (private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  // FIXME: LISTA DE INVENTARIO Y DETALLE
  // TODO: Para mandar datos
  fetchProducts(): void {
    this.productsService.getAllProducts()
    .subscribe((items) => {
      let products = Object.entries(items);
      this.products = products[1][1];

      // Guardamos valores en order
      for (let i = 0; i < this.products.length; i++) {
        this.products[i].order = i + 1;
      }
    })
  }

  // TODO: Eliminar producto
  deleteProduct (id: string) {
    this.productsService.deleteProduct(id)
    .subscribe(rta => {
      this.fetchProducts();
    })
  }

  /* numOrder() {
    for (let i = 0; i < this.products.length; i++) {
      this.contador = i;
    }
  } */
}
