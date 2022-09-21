import { Component, OnInit } from '@angular/core';
// Observaciones
import { Observable } from 'rxjs';

// Modelo
import { Product } from 'src/app/core/models/product.model';

// Servicios
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  // Variables - observable
  products$!: Observable<Product[]>;

  constructor (private cartService: CartService) {
    // Productos al carrito
    this.products$ = this.cartService.cart$;
  }

  ngOnInit(): void {
  }

}
