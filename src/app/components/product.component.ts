// FIXME: QUE SON LOS COMPONENTES Y DECORADORES

// TODO: Decoradores - Es un contexto a los elementos o artefactos de Angular
/* TODO: Un decorador es la manera en que Angular pueda saber que esta clase que tipo de error va a cumplir, si va a ser
un componente, si va ser un servicio, si va ser un pype, en este caso como vamos hacer un componente vamos a usar 
el decorador Component */
import { Component, EventEmitter, Input, Output } from "@angular/core";

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
    // FIXME: USO DE INPUTS Y OUTPUTS
    // TODO: Automáticamente el componente que tenemos va a recibir una propiedad desde otro componente
    @Input() product!: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    addCart() {
        console.log('añadir al carrito');
        // TODO: emit() - Colocar que cosa queremos emitir depende del tipo que colocamos en el productClicked
        // TODO: Como es any es cualquier valor o tipo, si es number pide número, etc.
        // TODO: Emitirá el id del producto
        this.productClicked.emit(this.product.id);
    }
}