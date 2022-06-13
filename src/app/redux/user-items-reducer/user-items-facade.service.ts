import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserCardInfo } from 'src/app/youtube/models/yt-models';
import { updateUserItems } from './user-items.actions';
import { selectUserItems } from './user-items.selector';

@Injectable({
  providedIn: 'root'
})
export class UserItemsFacadeService {
  userItems$ = this.store.select(selectUserItems)
  constructor(private store: Store) { }

  setUserItems (userItem: UserCardInfo) {
    this.store.dispatch(updateUserItems({userItem:userItem}))
  }
}
