import { createReducer, on } from '@ngrx/store';
import { updateFilter, updateFilters, updateSortType } from './filters.actions';

export interface FiltersState {
  sortType: 'date' | 'views' | 'likes' | 'none';
  filterBy: string;
}

export const initialState: FiltersState = {
  sortType: 'none',
  filterBy: '',
};

export const filtersReducer = createReducer(
  initialState,
  on(
    updateSortType,
    (state, { sortType }): FiltersState => ({ ...state, sortType })
  ),
  on(
    updateFilter,
    (state, { filterBy }): FiltersState => ({ ...state, filterBy })
  ),
  on(
    updateFilters,
    (state, props): FiltersState =>
      (state = { sortType: props.sortType, filterBy: props.filterBy })
  )
);
