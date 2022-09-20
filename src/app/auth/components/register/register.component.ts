import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Formulario
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Servicios
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // Variable
  form!: FormGroup;

  constructor (
    private authService: AuthService, 
    private router: Router,
    private formBuilder: FormBuilder) { 
      this.buildForm();
  }

  ngOnInit(): void {
  }

  // Registrarse
  register (event: Event) {
    event.preventDefault();

    // TODO: Si el formulario es valido
    if (this.form.valid) {
      const value = this.form.value;

      // Creará al usuario
      this.authService.createUser(value.email, value.password)
      .then(() => {
        // Navegará a la carpeta de iniciar sesión
        this.router.navigate(['auth/login']);
      })
      .catch((err) => {
        alert(err);
      })
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }
}
