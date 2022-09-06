import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    // FIXME: GUARDIANES
    // TODO: En base a la ruta va a devolver un Observable o un Promise o algo que sea booleano (Si puede o no acceder)
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // TODO: false - no permitirle acceder alguna ruta
    // TODO: true - permitirle el acceso a alguna ruta
    return false;
  }
  
}
