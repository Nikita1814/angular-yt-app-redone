import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { User } from '../auth/models/auth-models';
import { selectUser } from '../redux/auth-reducer/auth.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthReqGuard implements CanActivate {
  constructor(private store: Store, public router: Router) {}
  user$ = this.store.select(selectUser);
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.user$.pipe(
      map((user: User) => {
        if (user.token) {
          return true;
        } else {
          return this.router.createUrlTree(['/auth']);
        }
      })
    );
  }
}
