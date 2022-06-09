import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap, pipe } from 'rxjs';
import { User } from '../auth/models/auth-models';
import { getUser } from '../redux/auth-reducer/auth.selector';
import { PageState } from '../redux/state-related-models';

@Injectable({
  providedIn: 'root',
})
export class AuthReqGuard implements CanActivate {
  constructor(private store: Store<PageState>, public router: Router) {}
  user$ = this.store.select(getUser)
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      /*let isLoggedIn: boolean
      this.user$.subscribe((u: User | null) => {
        if (u){
          isLoggedIn = true
        }
      } )*/
    /*const userCards$ = this.store.select(getUser);
      if (userCards$.subscribe((u: User | null ) => u === null )) {
        this.router.navigate(['auth/']);
        return false;
      } else {
        console.log('user is' )
        return true;
      }*/
      let isLoggedIn: boolean = false
      this.user$.subscribe((u: User | null) => {
        if (u?.token){
          console.log('user is', u )
          isLoggedIn = true
        } else {
          this.router.navigate(['auth/']);
        }
      })
      return isLoggedIn
  }
  /*canNavigate(): Observable<bo>{

}*/
}
