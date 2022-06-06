import {
  Component,
  ViewEncapsulation,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { updateFilters } from 'src/app/redux/filters-reducer/filters.actions';
import { FiltersState } from 'src/app/redux/filters-reducer/filters.reducer';
import { PageState } from 'src/app/redux/state-related-models';
/*import { ResponseManagementService } from '../../services/response-management.service';
import { ResponseVidInt } from '../../models/response-vid-model';
import sortFuncs from '../../../core/utils/sort-funcs';*/

@Component({
  selector: 'app-filtering-criteria',
  templateUrl: './filtering-criteria.component.html',
  styleUrls: ['./filtering-criteria.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FiltersComponent implements OnInit {
  /*@Output() updateSort = new EventEmitter<
    (a: ResponseVidInt, b: ResponseVidInt) => number
  >();*/

  /*public sortFuncs!: {
    [key: string]: (a: ResponseVidInt, b: ResponseVidInt) => number;
  };*/

  constructor(/*public respService: ResponseManagementService*/ private fb: FormBuilder, private store: Store<PageState>) {}

  filterForm = this.fb.group({
    sortType: '',
    filterBy: ''

  })

  ngOnInit(): void {
    //this.sortFuncs = sortFuncs;
  }

  emitSort(sort: string) {
    //this.updateSort.emit(this.sortFuncs[sort]);
  }
  handleSumbit(){
   this.store.dispatch(updateFilters(this.filterForm.value as FiltersState))
  }
}
