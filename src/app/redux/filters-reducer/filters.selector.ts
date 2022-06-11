import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FiltersState } from './filters.reducer';

const selectFilters = createFeatureSelector<FiltersState>('filters');

export const getFilters = createSelector(
  selectFilters,
  (state: FiltersState) => state
);
