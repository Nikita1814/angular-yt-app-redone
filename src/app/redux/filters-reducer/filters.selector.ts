import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FiltersState } from './filters.reducer';

const  selectFiltersFeature = createFeatureSelector<FiltersState>('filters');

export const selectFilters = createSelector(
  selectFiltersFeature,
  (state: FiltersState) => state
);
