import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import { ResponseVideo } from 'src/app/youtube/models/you-tube-models';
import sortFuncs from 'src/app/youtube/utils/filter-functions';
import { clearSearchItemsError, searchItemsError, updateFilters, updateSearchItems } from './search-item.actions';

export type SortType = 'date' | 'views' | 'likes' | 'none';
export interface Filters {
  sortType: SortType;
  filterBy: string;
}
export interface SearchItemState extends Filters {
  searchItems: ResponseVideo[];
  searchItemsError: HttpErrorResponse | null
}
//export const initialState: ResponseVidInt[] | [] = [];
export const initialState: SearchItemState = {
  searchItems: [],
  sortType: 'none',
  filterBy: '',
  searchItemsError: null
};

export const searchItemsReducer = createReducer(
  initialState,
  on(
    updateSearchItems,
    (state, { searchItems }): SearchItemState => ({
      ...state,
      searchItems: searchItems,
    })
  ),
  on(
    updateFilters,
    (state, props): SearchItemState => ({
      ...state,
      sortType: props.sortType,
      filterBy: props.filterBy,
    })
  ),
  on(searchItemsError, (state, props): SearchItemState => ({
  ...state,
  searchItemsError: props.error
  })),

  on(clearSearchItemsError, (state) : SearchItemState => ({
    ...state,
    searchItemsError:null
  }))
);
