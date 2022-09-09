import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];


  constructor (private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  // FIXME: LISTA DE INVENTARIO Y DETALLE
  // TODO: Para mandar datos
  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = this.products;
    })
  }
}
