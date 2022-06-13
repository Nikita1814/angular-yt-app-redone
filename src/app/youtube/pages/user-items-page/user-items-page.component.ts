import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserItemsFacadeService } from 'src/app/redux/user-items-reducer/user-items-facade.service';
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

  constructor(public userItemsFacade: UserItemsFacadeService) {}

  ngOnInit(): void {
    this.formIsVisible = false;
    this.userCards = [];
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
