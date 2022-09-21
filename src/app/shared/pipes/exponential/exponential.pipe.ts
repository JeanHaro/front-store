import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  // TODO:  Transformar el dato
  transform(value: number): any {
    // TODO: Elevarla al cuadrado al valor
    return Math.pow(value, 2);
  }

}
