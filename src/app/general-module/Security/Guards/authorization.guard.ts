import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { BlockUiServiceService } from '../../Services/block-ui-service.service';
import { JwtServiceService } from '../../Services/jwt-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard implements CanActivate, CanActivateChild {
  constructor(
    private blockUI: BlockUiServiceService,
    private jwtService: JwtServiceService
  ) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.blockUI.block();
    if (sessionStorage.getItem('acces_token')) {
      console.log('Token no expirado');

      if (this.jwtService.tokenExpired()) {
        console.log('Token expirado');
        window.location.href = '/client/login';
        return false;
      }

      if(state.url.split('/').includes('signup')){
        this.blockUI.unblock();
        window.location.href = '/home';
        return false;
      }

      return true;
      /* const user = JSON.parse(sessionStorage.getItem('user') as string);
      if (!user) {
        window.location.href = '/client/login';
        return false;
      } else {
        return true;
      } */
    } else {
      this.blockUI.unblock();
      window.location.href = '/client/login';
      return false;
    }
  }
}
