import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ResponseVidInt } from 'src/app/youtube/models/yt-models';
import { SearchItemState } from './search-item.reducer';

const selectSearchItemsFeature =
  createFeatureSelector<SearchItemState>('searchResults');

export const selectSearchItems = createSelector(
  selectSearchItemsFeature,
  (state: SearchItemState) : ResponseVidInt[] => state.filteredSearchItems
);

