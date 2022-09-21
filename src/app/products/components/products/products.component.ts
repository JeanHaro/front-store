import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

// TODO: Interface
import { Product } from 'src/app/core/models/product.model';

// TODO: Servicio
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnChanges {

  // Productos
  products: Product[] = [];

  constructor (private productsService: ProductsService) { }

  ngOnInit(): void { 
    this.fetchProducts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('hola' + changes);
    
  }

  clickProduct (id: number) {
    console.log('product');
    console.log(id);
  }

  // Obtienes todos los productos
  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe((items) =>{
      // entries() - Vuelve las propiedades de un objeto a un Array
      let products = Object.entries(items);
      this.products = products[1][1];
    })
  }
}
