import { Injectable } from '@angular/core';

// FIXME: CREANDO NUESTROS PROPIOS SERVICIOS HTTP CLIENT
import { HttpClient } from '@angular/common/http';

// FIXME: CREANDO EL DETALLE DE CADA PRODUCTO
// TODO: Interfaces
import { Product } from 'src/app/core/models/product.model'; 

// FIXME: HACIENDO UNA SOLICITUD GET DESDE EL SERVICIO
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  constructor (private http: HttpClient) { }

  // FIXME: USO DE ngFor PARA RECORRER OBJETOS
  // TODO: Productos
  /* products: Product[] = [
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
  ]; */

  // TODO: Método que te devuelve todos los productos
  getAllProducts() {
    // get - solicitar información
    // return this.products;
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }

  // TODO: Recibe el id del producto que queremos buscar
  getProduct (id: string) {
    // TODO: find - es para encontrar un valor, donde se manda una función
    // TODO: Si el id coincide con el item.id, ese será el producto que les va a devolver
    // return this.products.find(item => id === item.id);
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  // FIXME: HACIENDO UNA SOLICITUD POST DESDE EL SERVICIO
  // TODO: Creamos un producto
  createProduct (product: Product) {
    return this.http.post(`${environment.url_api}/products`, product);
  }
}
