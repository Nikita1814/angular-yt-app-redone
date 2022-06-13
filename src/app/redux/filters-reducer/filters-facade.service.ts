import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateFilters } from './filters.actions';
import { FiltersState } from './filters.reducer';
import { selectFilters } from './filters.selector';

@Injectable({
  providedIn: 'root'
})
export class FiltersFacadeService {
 fitlers$ = this.store.select(selectFilters)
  constructor( private store: Store) { }
  
  setFilters( filters : FiltersState){
    this.store.dispatch(updateFilters(filters))
  }
}
