import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Formulario
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Servicios
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Variables
  form!: FormGroup;

  constructor (
    private authService: AuthService, 
    private router: Router,
    private formBuilder: FormBuilder) { 
      this.buildForm();
  }

  ngOnInit(): void {
  }

  // Iniciar sesión
  login (event: Event) {
    event.preventDefault();

    // TODO: Si el formulario es valido
    if (this.form.valid) {
      const value = this.form.value;

      this.authService.login(value.email, value.password)
      .then(() => {
        this.router.navigate(['/admin']);
      })
      .catch((err) => {
        alert('No es valido');
      })
    }
  }

  // Validar el formulario
  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }
}
