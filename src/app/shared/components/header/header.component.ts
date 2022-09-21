import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
// TODO: map - transformar el valor que nos llega por uno nuevo
import { map } from 'rxjs/operators';

import { 
  faBars, 
  faClose 
} from '@fortawesome/free-solid-svg-icons';

// Servicio
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // TODO: Observable de valor número
  total$: Observable<number>;

  constructor (private cartService: CartService) { 
    // TODO: Acá obtenemos los productos que se vayan agregando al carrito
    // TODO: En map, se sentencia como lo vamos a transformar a un valor que es el tamño de la lista
    // TODO: Ahora nos suscribimos pero desde el template
    this.total$ = this.cartService.cart$.pipe(map(products => products.length));
    // Nos llegaría otra cosa, no productos, porque lo transformamos
    /* .subscribe(total => {
      this.total = total;
    }) */
  }

  ngOnInit(): void {
  }

  // Iconos
  faBars = faBars;

  // Abrir y Cerrar el Menu Bar
  barsActive() {
    let iconBar = document.getElementById('icon-bar');
    let menuBar = document.getElementById('menu-bar');

    if (this.faBars !== faBars) {
      this.faBars = faBars;
      iconBar?.classList.remove('background-red');
      iconBar?.classList.remove('color-white');
      menuBar?.classList.remove('right-0');
      menuBar?.classList.remove('transition');
    }  else {
      this.faBars = faClose;
      iconBar?.classList.add('background-red');
      iconBar?.classList.add('color-white');
      menuBar?.classList.add('right-0');
      menuBar?.classList.add('transition');
    }
  }
}
