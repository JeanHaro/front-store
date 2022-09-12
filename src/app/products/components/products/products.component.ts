import { Component, OnInit } from '@angular/core';

// FIXME: CREANDO RUTAS EN ANGULAR
// TODO: Interface
import { Product } from 'src/app/core/models/product.model';

// FIXME: CREANDO NUESTROS PROPIOS SERVICIOS HTTP CLIENT
// TODO: Servicio
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // Productos
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
  ];

  constructor (private productsService: ProductsService) { }

  ngOnInit(): void { 
    this.fetchProducts();
  }

  // FIXME: USO DE ngFor PARA RECORRER OBJETOS
  // TODO: Productos
  /* products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
  ]; */

  // FIXME: USO DE INPUTS Y OUTPUTS
  clickProduct (id: number) {
    console.log('product');
    console.log(id);
  }

  fetchProducts() {
    this.productsService.getAllProducts()
    // Por defecto devuelve un observable, así que tenemos que subscribirnos para obtener la respuesta
    .subscribe(products => {
      this.products = products;
    })
  }
}
