import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from 'src/app/auth/models/auth-models';
import { ResponseVidInt } from 'src/app/youtube/models/yt-models';

const searchItemsSelector = createFeatureSelector<ResponseVidInt[]>('searchResults');

export const getSearchItems = createSelector(
  searchItemsSelector,
  (state: ResponseVidInt[] | []) => state
);
