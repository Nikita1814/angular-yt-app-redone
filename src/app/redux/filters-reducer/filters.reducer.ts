import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { ResponseVidInt } from 'src/app/youtube/models/yt-models';
import { updateFilter, updateFilters, updateSortType } from './filters.actions';

export interface FiltersState {
  sortType: string;
  filterBy: string;
}




export const initialState: FiltersState = {
  sortType:'none',
  filterBy:''
};

export const filtersReducer = createReducer(
  initialState,
  on(updateSortType, (state, { sortType }) => ({...state, sortType})),
  on(updateFilter, (state, { filterBy }) => ({...state, filterBy})),
  on(updateFilters, (state, props) => state = { sortType : props.sortType, filterBy: props.filterBy} )
);
