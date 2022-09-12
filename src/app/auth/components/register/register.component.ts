import { Component, OnInit } from '@angular/core';
// FIXME: INSTALAR ANGULAR FIREBASE Y CONFIGURAR FIREBASE AUTH
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Servicios
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;

  constructor (
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  register (event: Event) {
    event.preventDefault();
    // TODO: Si el email y la contraseña es correcta se podrá registrar
    if (this.form.valid) {
      const value = this.form.value;
      // Creará el usuario
      this.authService.createUser(value.email, value.password)
      .then(() => {
        // Navegará a la carpeta de iniciar sesión
        this.router.navigate(['auth/login']);
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
