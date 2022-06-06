import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from 'src/app/auth/models/auth-models';
import { ResponseVidInt } from 'src/app/youtube/models/yt-models';
import { FiltersState } from './filters.reducer';

const filtersSelector = createFeatureSelector<FiltersState>('filters');

export const getFilters = createSelector(
  filtersSelector,
  (state: FiltersState) => state
);
