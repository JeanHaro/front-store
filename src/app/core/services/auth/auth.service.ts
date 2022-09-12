import { Injectable } from '@angular/core';

// FIXME: INSTALAR ANGULAR FIREBASE Y CONFIGURAR FIREBASE AUTH
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor (private auth: AngularFireAuth) { }

  createUser (email: string, password: string) {
    // TODO: Crear usuario con email and password
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  // FIXME: IMPLEMENTANDO AUTH Y GUARDS
  login (email: string, password: string) {
    // TODO: Iniciar sesión con email and paassword
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  // Cerrar sesión
  logout() {
    return this.auth.signOut();
  }

  // Tiene usuario
  hasUser() {
    return this.auth.authState;
  }
}
