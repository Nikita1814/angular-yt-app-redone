import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PageState } from 'src/app/redux/state-related-models';
import { getUserItems } from 'src/app/redux/user-items-reducer/user-items.selector';
import { UserCardInfo } from '../../models/yt-models';

@Component({
  selector: 'app-user-cards-page',
  templateUrl: './user-cards-page.component.html',
  styleUrls: ['./user-cards-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardsPageComponent {
  formIsVisible: boolean;
  userCards: UserCardInfo[];
  userCards$: Observable<UserCardInfo[]>;

  constructor(private store: Store<PageState>) {}

  ngOnInit(): void {
    this.formIsVisible = false;
    this.userCards = [];
    this.userCards$ = this.store.select(getUserItems);
  }

  toggleFormVisibility() {
    this.formIsVisible = !this.formIsVisible;
  }

  addCard(card: UserCardInfo) {
    this.userCards.push(card);
  }

  /*handleSubmit(val: UserCardInfo) {
    this.userCards.push(val);
    this.toggleFormVisibility();
  }*/
}
