// FIXME: QUE SON LOS COMPONENTES Y DECORADORES

// TODO: Decoradores - Es un contexto a los elementos o artefactos de Angular
/* TODO: Un decorador es la manera en que Angular pueda saber que esta clase que tipo de error va a cumplir, si va a ser
un componente, si va ser un servicio, si va ser un pype, en este caso como vamos hacer un componente vamos a usar 
el decorador Component */
import { Component } from "@angular/core";

// Modelo
import { Product } from "../product.model";

// TODO: Clase
// TODO: Para que cualquier elemento en Angular pueda usar la clase o nuestro componente, usamos la palabra "export"
// TODO: Se coloca acá el Decorador "@Component"
// TODO: Como parámetro tendrá el objeto de metadata
@Component({
    // TODO: Es el nombre como lo llamaremos en forma de etiqueta <app-product></app-product>
    selector: 'app-product',
    // TODO: A que archivo HTML vamos a llamar o que archivo esta enlazado a este componente
    templateUrl: './product.component.html',
})

export class ProductComponent {
    // Variable tipo Product (Interfaz)
    product: Product = {
        id: '1',
        image: 'assets/images/camiseta.png',
        title: 'Camiseta',
        price: 80000,
        description: 'bla bla bla bla',
    }
}