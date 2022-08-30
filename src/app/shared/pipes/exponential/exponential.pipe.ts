import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  // FIXME: CONSTRUYENDO UN PROPIO PIPE
  // TODO: ¿Qué hace un pipe? Transformar un dato
  transform(value: number): any {
    // TODO: Elevarla al cuadrado al valor
    return Math.pow(value, 2);
  }

}
