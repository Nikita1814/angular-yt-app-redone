import { createReducer, on } from '@ngrx/store';
import { ResponseVidInt } from 'src/app/youtube/models/yt-models';
import sortFuncs from 'src/app/youtube/utils/filter-functions';
import { updateFilters, updateSearchItems } from './search-item.actions';

export type SortType = 'date' | 'views' | 'likes' | 'none';
export interface Filters {
  sortType: SortType;
  filterBy: string;
}
export interface SearchItemState extends Filters {
  searchItems: ResponseVidInt[];
  filteredSearchItems: ResponseVidInt[]
}
//export const initialState: ResponseVidInt[] | [] = [];
export const initialState: SearchItemState = {
  searchItems: [],
  filteredSearchItems: [],
  sortType: 'none',
  filterBy: '',
};

export const searchItemsReducer = createReducer(
  initialState,
  on(
    updateSearchItems,
    (state, { searchItems }): SearchItemState => ({
      ...state,
      searchItems: searchItems,
      filteredSearchItems: searchItems
        .filter((el) => el.snippet.title.toLowerCase().includes(state.filterBy))
        .sort(sortFuncs[state.sortType]),
    })
  ),
  on(
    updateFilters,
    (state, props): SearchItemState => ({
      ...state,
      filteredSearchItems: state.searchItems
        .filter((el) => el.snippet.title.toLowerCase().includes(props.filterBy))
        .sort(sortFuncs[props.sortType]),
      sortType: props.sortType,
      filterBy: props.filterBy,
    })
  )
);
