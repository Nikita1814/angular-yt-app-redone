import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SearchItemFacadeService } from 'src/app/redux/search-item-reducer/search-item-facade.service';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorModalComponent {
  @Input() error!: HttpErrorResponse;

  constructor(public searchItemFacade: SearchItemFacadeService) {}

  removeError() {
    this.searchItemFacade.clearError();
  }
}
