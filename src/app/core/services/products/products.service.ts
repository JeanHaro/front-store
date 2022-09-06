import { Injectable } from '@angular/core';

// FIXME: CREANDO EL DETALLE DE CADA PRODUCTO
// TODO: Interfaces
import { Product } from 'src/app/core/models/product.model'; 

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // FIXME: USO DE ngFor PARA RECORRER OBJETOS
  // TODO: Productos
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
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
  ];

  constructor() { }

  // TODO: Método que te devuelve todos los productos
  getAllProducts() {
    return this.products;
  }

  // TODO: Recibe el id del producto que queremos buscar
  getProduct (id: string) {
    // TODO: find - es para encontrar un valor, donde se manda una función
    // TODO: Si el id coincide con el item.id, ese será el producto que les va a devolver
    return this.products.find(item => id === item.id);
  }
}
