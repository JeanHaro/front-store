import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor (element: ElementRef) { 
    // TODO: Referenciar a ese element y pedir el elemento nativo y modificarlo
    element.nativeElement.style.textDecoration = 'underline';
  }
}
