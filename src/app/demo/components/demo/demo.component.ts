import { Component, OnInit } from '@angular/core';

// FIXME: CREANDO RUTAS EN ANGULAR
// Interface
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  // Variables serán renderizadas en ese template
  // Se puede llamar desde el archivo app.component.html con String Interpolation
  /* Las variables que tengamos acá, son variables que podemos mostrar o renderizar en nuestro archivo 
  app.component.html */
  title = 'store';

  ngOnInit(): void {
  }

  // FIXME: USO DE ngFor PARA RECORRER OBJETOS
  // Productos
  products: Product[] = [{
      uid: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      uid: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      uid: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      uid: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      uid: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      uid: '4',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
  ];

  // FIXME: USO DE INPUTS Y OUTPUTS
  clickProduct (id: number) {
    console.log('product');
    console.log(id);
  }

  // FIXME: CONSTRUYENDO UN PROPIO PIPE
  power = 10;
}
