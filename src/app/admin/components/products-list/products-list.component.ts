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

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
  ];
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
    .subscribe((products) => {
      this.products = products;
    })
  }

  // TODO: Eliminar producto
  deleteProduct (id: string) {
    this.productsService.deleteProduct(id)
    .subscribe(rta => {
      this.fetchProducts();
    })
  }
}
