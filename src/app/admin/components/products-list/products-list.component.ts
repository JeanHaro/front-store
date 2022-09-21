import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/core/services/products/products.service';

import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  // Variables
  products: Product[] = [];
  
  // TODO: Esto se saca de Angular Material
  displayedColumns: string[] = ['id', 'title', 'description', 'price', 'actions'];

  constructor ( private productsService: ProductsService ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  // TODO: Para mandar datos
  // Obtenemos todos los datos de todos los productos
  fetchProducts(): void {
    this.productsService.getAllProducts()
    .subscribe((items) => {
      // Obtenemos los datos de los productos almacenados en el backend
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
}
