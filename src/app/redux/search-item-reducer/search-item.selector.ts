import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ResponseVidInt } from 'src/app/youtube/models/yt-models';

const selectSearchItemsFeature =
  createFeatureSelector<ResponseVidInt[]>('searchResults');

export const selectSearchItems = createSelector(
  selectSearchItemsFeature,
  (state: ResponseVidInt[] | []) => state
);
