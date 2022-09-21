import { AbstractControl } from "@angular/forms";

export class MyValidators {
    // Métodos estáticos
    // Precios menores a 
    static isPriceValid (control: AbstractControl) {
        // Valor actual
        const value = control.value;
        console.log(value);

        // Si el valor del precio es mayor a 10000
        if ( value > 10000) {
            return { price_invalid: true } // Es invalido
        }

        return null;
    }
}