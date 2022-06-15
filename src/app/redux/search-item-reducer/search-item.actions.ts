import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { ResponseVideo } from 'src/app/youtube/models/you-tube-models';
import { SortType } from './search-item.reducer';

export const updateSearchItems = createAction(
  '[Search Results Page] Youtube Search Success',
  props<{ searchItems: ResponseVideo[] }>()
);

export const searchItemsError = createAction(
  '[Search Results Page] Youtube Search Error',
  props<{ error: HttpErrorResponse }>()
);

export const clearSearchItemsError = createAction(
  '[Search Results Page] clearing Youtube Search Error '
);

export const initiateSearch = createAction(
  '[Search Results Page] Initiate Youtube Search ',
  props<{ searchQuery: string }>()
);

export const updateFilters = createAction(
  '[search Results Page] Filters Update',
  props<{
    sortType: SortType;
    filterBy: string;
  }>()
);
