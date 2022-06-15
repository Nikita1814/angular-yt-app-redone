import { HttpErrorResponse } from '@angular/common/http';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ResponseVideo } from 'src/app/youtube/models/yt-models';
import { SearchItemState } from './search-item.reducer';

const selectSearchItemsFeature =
  createFeatureSelector<SearchItemState>('searchResults');

export const selectSearchItems = createSelector(
  selectSearchItemsFeature,
  (state: SearchItemState): ResponseVideo[] => state.filteredSearchItems
);

export const selectSearchItemsError = createSelector(
  selectSearchItemsFeature,
  (state: SearchItemState): HttpErrorResponse | null => state.searchItemsError
);
