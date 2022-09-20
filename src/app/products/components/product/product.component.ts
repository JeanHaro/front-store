// FIXME: QUE SON LOS COMPONENTES Y DECORADORES

// TODO: Decoradores - Es un contexto a los elementos o artefactos de Angular
/* TODO: Un decorador es la manera en que Angular pueda saber que esta clase que tipo de error va a cumplir, si va a ser
un componente, si va ser un servicio, si va ser un pype, en este caso como vamos hacer un componente vamos a usar 
el decorador Component */
import { 
    Component, 
    DoCheck, 
    EventEmitter, 
    Input, 
    Output, 
    OnChanges, 
    OnDestroy, 
    OnInit, 
    SimpleChanges 
} from "@angular/core";

// Modelo
import { Product } from "../../../core/models/product.model";

// FIXME: AÑADIENDO PRODUCTOS AL CARRITO
// Servicios
import { CartService } from "src/app/core/services/cart/cart.service";

// TODO: Clase
// TODO: Para que cualquier elemento en Angular pueda usar la clase o nuestro componente, usamos la palabra "export"
// TODO: Se coloca acá el Decorador "@Component"
// TODO: Como parámetro tendrá el objeto de metadata
@Component({
    // TODO: Es el nombre como lo llamaremos en forma de etiqueta <app-product></app-product>
    selector: 'app-product',
    // TODO: A que archivo HTML vamos a llamar o que archivo esta enlazado a este componente
    templateUrl: './product.component.html',
    // FIXME: ESTILOS PARA MOSTRAR LA LISTA DE PRODUCTOS
    // Estilos
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
    // Variable tipo Product (Interfaz)
    // FIXME: USO DE INPUTS Y OUTPUTS
    // TODO: Automáticamente el componente que tenemos va a recibir una propiedad desde otro componente
    @Input() product!: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    // Añadir al carrito
    addCart() {
        console.log('añadir al carrito');
        // TODO: emit() - Colocar que cosa queremos emitir depende del tipo que colocamos en el productClicked
        // TODO: Como es any es cualquier valor o tipo, si es number pide número, etc.
        // TODO: Emitirá el id del producto
        // this.productClicked.emit(this.product.id);
        // TODO: Agregar ese producto al carro
        this.cartService.addCart(this.product);
    }

    // FIXME: CICLO DE VIDA DE LOS COMPONENTES
    /* TODO: Acá es donde se construye nuestro elemento o nuestro productComponent y Angular hace referencia a el y lo 
    pone en interfaz */
    constructor (private cartService: CartService) {
        console.log('1, constructor');
    }

    // TODO: Se encarga de detectar los cambios, cambios anteriores y nuevos
    ngOnChanges (changes: SimpleChanges) {
        console.log('2, ngOnChanges');
        console.log(changes);
    }

    // TODO: Se ejecuta solo una vez y es cuando el componente ya esté puesto en pantalla
    ngOnInit() {
        console.log('3, ngOnInit');
    }

    // TODO: ngOnChanges y ngDoCheck tienen un error de colisión, ya que los dos se encargan de detectar cambios
    // TODO: ngOnChanges es nativa de Angular
    // TODO: ngDoCheck puede ser la detección automática de cambios, pero a nuestra manera
    // TODO: Se lo dejas a Angular o lo hacemos nosotros
    ngDoCheck() {
        console.log('4, DoCheck');
    }

    // TODO: Este evento solo se ejecuta cuando algún elemento es quitado o removido de la interfaz
    /* TODO: Cuando queremos hacer desuscripciones a datos, tengamos una suscripción viva de datos, remover y 
    eliminar bucles de memoria que podríamos llegar a tener, para apagar cualquier cosa dentro de nuestro 
    componente lo podríamos utilizar porque ya se está removiendo la interfaz, esto podría limpiar procesos
    de memoria, no construyendo una mala práctica */
    ngOnDestroy() {
        console.log('5, ngOnDestroy');
    }

    // FIXME: USANDO LOS PIPES DE ANGULAR
    // Fecha actual
    today = new Date();
}