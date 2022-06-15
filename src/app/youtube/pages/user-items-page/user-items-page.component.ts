import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { UserItemsFacadeService } from 'src/app/redux/user-items-reducer/user-items-facade.service';
import { UserCardInfo } from '../../models/you-tube-models';

@Component({
  selector: 'app-user-items-page',
  templateUrl: './user-items-page.component.html',
  styleUrls: ['./user-items-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserItemsPageComponent {
  formIsVisible: boolean = false;
  userCards: UserCardInfo[];
  userCards$: Observable<UserCardInfo[]>;

  constructor(public userItemsFacade: UserItemsFacadeService) {}

  toggleFormVisibility() {
    this.formIsVisible = !this.formIsVisible;
  }

  cardsById(index: number, card: UserCardInfo) {
    return card.id;
  }
}
