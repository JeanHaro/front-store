import { Injectable } from '@angular/core';

// Reactivo
import { BehaviorSubject } from 'rxjs'

// Interface
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // TODO: Privado para que no todos tengan acceso a este Array
  private products: Product[] = [];

  // TODO: Que sea con un array de Producto, y que inicie con un array en vacío
  private cart = new BehaviorSubject<Product[]>([]);

  // TODO: Es de tipo observable para que cualquiera se suscriba al carrito
  cart$ = this.cart.asObservable();

  constructor() { }

  // TODO: Método para agregar al carrito
  addCart (product: Product) {
    // TODO: Cada vez que agreguen algo al carrito, inserte una nueva variable
    this.products = [...this.products, product];
    // TODO: Notificar a todos los componentes, que están suscritos que hubo un cambio
    // TODO: Y se envía a ese nuevo array
    this.cart.next(this.products);
  }
}
