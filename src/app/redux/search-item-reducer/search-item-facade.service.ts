import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { initiateSearch } from './search-item.actions';
import { selectSearchItems } from './search-item.selector';

@Injectable({
  providedIn: 'root',
})
export class SearchItemFacadeService {
  searchItems$ = this.store.select(selectSearchItems);
  constructor(private store: Store) {}

  submitSearch(searchString: string) {
    this.store.dispatch(initiateSearch({ searchQuery: searchString }));
  }
}
