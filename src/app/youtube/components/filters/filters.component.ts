import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
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


  constructor(private fb: FormBuilder, private store: Store) {}

  filterForm = this.fb.group({
    sortType: '',
    filterBy: ''

  })

  handleSubmit(){
   this.store.dispatch(updateFilters(this.filterForm.value as FiltersState))
  }
}
