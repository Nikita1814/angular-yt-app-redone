import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../auth/models/auth-models';
import { getUser } from '../redux/auth-reducer/auth.selector';
import { PageState } from '../redux/state-related-models';

@Injectable({
  providedIn: 'root'
})
export class AuthReqGuard implements CanActivate {
  constructor ( private store: Store<PageState>, public router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const userCards$ = this.store.select(getUser);
      if (userCards$.subscribe((u: User | null ) => u === null )) {
        this.router.navigate(['auth/']);
        return false;
      } else {
        return true;
      }
  }

}
