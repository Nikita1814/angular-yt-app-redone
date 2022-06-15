import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  clearSearchItemsError,
  initiateSearch,
  updateFilters,
} from './search-item.actions';
import { Filters } from './search-item.reducer';
import {
  selectSearchItems,
  selectSearchItemsError,
} from './search-item.selector';

@Injectable({
  providedIn: 'root',
})
export class SearchItemFacadeService {
  searchItems$ = this.store.select(selectSearchItems);
  searchError$ = this.store.select(selectSearchItemsError);
  constructor(private store: Store) {}

  submitSearch(searchString: string) {
    this.store.dispatch(initiateSearch({ searchQuery: searchString }));
  }
  setFilters(filters: Filters) {
    this.store.dispatch(updateFilters(filters));
  }
  clearError() {
    this.store.dispatch(clearSearchItemsError());
  }
}
