import { HttpErrorResponse } from '@angular/common/http';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ResponseVideo } from 'src/app/youtube/models/you-tube-models';
import sortFuncs from 'src/app/youtube/utils/filter-functions';
import { SearchItemState } from './search-item.reducer';

const selectSearchItemsFeature =
  createFeatureSelector<SearchItemState>('searchResults');

export const selectSearchItems = createSelector(
  selectSearchItemsFeature,
  (state: SearchItemState): ResponseVideo[] => state.searchItems
  .filter((el) => el.snippet.title.toLowerCase().includes(state.filterBy))
  .sort(sortFuncs[state.sortType]),
);

export const selectSearchItemsError = createSelector(
  selectSearchItemsFeature,
  (state: SearchItemState): HttpErrorResponse | null => state.searchItemsError
);
