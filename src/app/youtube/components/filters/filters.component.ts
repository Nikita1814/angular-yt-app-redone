import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SearchItemFacadeService } from 'src/app/redux/search-item-reducer/search-item-facade.service';
import { Filters } from 'src/app/redux/search-item-reducer/search-item.reducer';

export interface Option {
  value: string;
  title: string;
}
@Component({
  selector: 'app-filtering-criteria',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent {
  options: Option[] = [
    {
      value: 'views',
      title: 'Views',
    },
    {
      value: 'date',
      title: 'Date',
    },
    {
      value: 'likes',
      title: 'Likes',
    },
    {
      value: 'none',
      title: 'None',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private searchItemFacade: SearchItemFacadeService
  ) {}

  filterForm = this.fb.group({
    sortType: '',
    filterBy: '',
  });

  optionByValue(index: number, option: Option) {
    return option.value;
  }
  handleSubmit() {
    this.searchItemFacade.setFilters(this.filterForm.value as Filters);
  }
}
