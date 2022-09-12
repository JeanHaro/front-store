import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import { Router } from '@angular/router';

// FIXME: IMPLEMENTANDO AUTH Y GUARDS
// Servicio
import { AuthService } from './core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate {

  constructor (
    private authService: AuthService,
    private router: Router
    ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    // FIXME: GUARDIANES
    // TODO: En base a la ruta va a devolver un Observable o un Promise o algo que sea booleano (Si puede o no acceder)
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // TODO: false - no permitirle acceder alguna ruta
    // TODO: true - permitirle el acceso a alguna ruta
    return this.authService.hasUser().pipe(
      // TODO: Si el usuario no está saldrá false, y no podrá acceder al admin, y si está podrá entrar
      map(user => user === null ? false : true),
      // FIXME: SUBIENDO UNA IMAGEN A FIREBASE STORAGE
      tap(hasUser => {
        if (!hasUser) {
          // TODO: Irá al enlace si es que intenta entrar sin iniciar sesión
          this.router.navigate(['/auth/login']);
        }
      })
    );
  }
  
}
