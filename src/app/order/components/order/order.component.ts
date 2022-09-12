import { Component, OnInit } from '@angular/core';
// FIXME: CREANDO LA PAGINA DE LA ORDEN Y USO DE ASYNC
import { Observable } from 'rxjs';

// Modelo
import { Product } from 'src/app/core/models/product.model';

// Servicios
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$!: Observable<Product[]>;

  constructor (private cartService: CartService) {
    // Productos al carrito
    this.products$ = this.cartService.cart$;
  }

  ngOnInit(): void {
  }

}
