import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUserItems } from 'src/app/redux/user-items-reducer/user-items.selector';
import { UserCardInfo } from '../../models/yt-models';

@Component({
  selector: 'app-user-items-page',
  templateUrl: './user-items-page.component.html',
  styleUrls: ['./user-items-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserItemsPageComponent implements OnInit {
  formIsVisible: boolean;
  userCards: UserCardInfo[];
  userCards$: Observable<UserCardInfo[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.formIsVisible = false;
    this.userCards = [];
    this.userCards$ = this.store.select(selectUserItems);
  }

  toggleFormVisibility() {
    this.formIsVisible = !this.formIsVisible;
  }

  addCard(card: UserCardInfo) {
    this.userCards.push(card);
  }

  cardsById(index: number, card: UserCardInfo) {
    return card.id;
  }
}
