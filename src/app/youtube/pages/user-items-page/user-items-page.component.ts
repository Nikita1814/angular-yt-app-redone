import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { UserItemsFacadeService } from 'src/app/redux/user-items-reducer/user-items-facade.service';
import { UserItemFormComponent } from '../../components/user-item-form/user-item-form.component';
import { UserCardInfo } from '../../models/you-tube-models';

@Component({
  selector: 'app-user-items-page',
  templateUrl: './user-items-page.component.html',
  styleUrls: ['./user-items-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserItemsPageComponent {
  formIsVisible: boolean = false;
  userCards: UserCardInfo[];
  userCards$: Observable<UserCardInfo[]>;

  constructor(
    public userItemsFacade: UserItemsFacadeService,
    private windowService: NbWindowService
  ) {}

  toggleFormVisibility() {
    this.windowService.open(UserItemFormComponent, {
      buttons: {
        minimize: true,
        maximize: true,
        fullScreen: true,
        close: true,
      },
    });
  }

  cardsById(index: number, card: UserCardInfo) {
    return card.id;
  }
}
