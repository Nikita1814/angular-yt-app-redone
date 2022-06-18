import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SearchItemFacadeService } from 'src/app/redux/search-item-reducer/search-item-facade.service';
import { Filters } from 'src/app/redux/search-item-reducer/search-item.reducer';

@Component({
  selector: 'app-filtering-criteria',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent {
  constructor(
    private fb: FormBuilder,
    private searchItemFacade: SearchItemFacadeService
  ) {}

  filterForm = this.fb.group({
    sortType: '',
    filterBy: '',
  });

  handleSubmit() {
    this.searchItemFacade.setFilters(this.filterForm.value as Filters);
  }
}
