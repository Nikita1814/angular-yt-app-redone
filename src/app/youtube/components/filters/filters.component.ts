import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FiltersFacadeService } from 'src/app/redux/filters-reducer/filters-facade.service';
import { updateFilters } from 'src/app/redux/filters-reducer/filters.actions';
import { FiltersState } from 'src/app/redux/filters-reducer/filters.reducer';
import { PageState } from 'src/app/redux/state-related-models';

@Component({
  selector: 'app-filtering-criteria',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent {


  constructor(private fb: FormBuilder,  private filtersFacade: FiltersFacadeService) {}

  filterForm = this.fb.group({
    sortType: '',
    filterBy: ''

  })

  handleSubmit(){
   this.filtersFacade.setFilters(this.filterForm.value as FiltersState)
  }
}
