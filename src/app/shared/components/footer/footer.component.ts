import { Component, OnInit } from '@angular/core';

// FIXME: INTRODUCCION AL FORMCONTROL
// Formularios
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // Variables
  emailField!: FormControl;

  constructor() {
    // TODO: Tamaño mínimo y máximo de letras
    // TODO: Como parámetro en FormControl, es comov amos a validar
    this.emailField = new FormControl('', [
      Validators.required, // requerido
      Validators.email
      /* Validators.minLength(4), 
      Validators.maxLength(10) */
    ]);

    // Para controlar los datos
    /* this.emailField.valueChanges
    .subscribe(value => {
      console.log(value);
    }) */
  }

  ngOnInit(): void {
  }

  // Envía el email a la consola
  sendMail() {
    if (this.emailField.valid) {
      // TODO: Si es valido me va a devolver el valor que tenemos actualmente en la consola
      console.log(this.emailField.value);
    }
  }

}
