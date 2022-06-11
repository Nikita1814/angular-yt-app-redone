import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, takeUntil } from 'rxjs';
import { User } from '../auth/models/auth-models';
import { getUser } from '../redux/auth-reducer/auth.selector';


@Injectable({
  providedIn: 'root',
})
export class AuthReqGuard implements CanActivate {
  constructor(private store: Store, public router: Router) {}
  user$ = this.store.select(getUser)
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

      let isLoggedIn: boolean = false
      this.user$.subscribe((u: User | null) => {
        takeUntil(this.user$)
        if (u?.token){
          console.log('user is', u )
          isLoggedIn = true
        } else {
          this.router.navigate(['auth/']);
        }
      })
      return isLoggedIn
  }
}
