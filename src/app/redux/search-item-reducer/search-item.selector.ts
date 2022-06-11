import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ResponseVidInt } from 'src/app/youtube/models/yt-models';

const selectSearchItems = createFeatureSelector<ResponseVidInt[]>('searchResults');

export const getSearchItems = createSelector(
  selectSearchItems,
  (state: ResponseVidInt[] | []) => state
);
