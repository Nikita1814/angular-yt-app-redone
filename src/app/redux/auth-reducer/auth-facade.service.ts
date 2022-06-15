import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/auth/models/auth-models';
import { selectUser } from './auth.selector';
import { updateUser, logOut } from './auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthFacadeService {
  user$ = this.store.select(selectUser);

  constructor(private store: Store) {}

  setUser(user: User) {
    this.store.dispatch(updateUser({ user: user }));
  }

  logOut() {
    this.store.dispatch(logOut());
  }
}
