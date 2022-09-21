import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

// TODO: Interfaces
import { Product } from 'src/app/core/models/product.model'; 

// FIXME: HACIENDO UNA SOLICITUD GET DESDE EL SERVICIO
// Environment
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  constructor (private http: HttpClient) { }

  // TODO: Método que te devuelve todos los productos
  // Obtener todos los productos
  getAllProducts() {
    // get - solicitar información
    return this.http.get<Product>(`${environment.url_api}/productos`);
  }

  // TODO: Recibe el id del producto que queremos buscar
  // Obtener un producto por su id
  getProduct (id: string) {
    return this.http.get<Product>(`${environment.url_api}/productos/${id}`);
  }

  // TODO: Creamos un producto
  createProduct (product: Product) {
    // TODO: En el segundo parámetro se envía el tipo, en este caso es Producto
    return this.http.post(`${environment.url_api}/productos`, product);
  }

  // TODO: change: Partial<Product> - solo queremos una parte del producto
  // TODO: Actualizar producto
  updateProduct (id: string, changes: Partial<Product>) {
    // TODO: En el segundo parámetro se envía los cambios que se quieren cambiar
    return this.http.put(`${environment.url_api}/productos/${id}`, changes);
  }

  // TODO: Eliminar producto
  deleteProduct (id: string) {
    return this.http.delete(`${environment.url_api}/productos/${id}`);
  }
}
