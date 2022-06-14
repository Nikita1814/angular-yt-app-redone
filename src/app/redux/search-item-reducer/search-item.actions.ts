import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { ResponseVideo } from 'src/app/youtube/models/yt-models';

export const updateSearchItems = createAction(
  '[Search Results Page] Yt Search Success',
  props<{ searchItems: ResponseVideo[] }>()
);

export const searchItemsError = createAction(
  '[Search Results Page] Yt Search Error',
  props<{ error: HttpErrorResponse}>()
);

export const clearSearchItemsError = createAction(
  '[Search Results Page] clearing Yt Search Error '
);

export const initiateSearch = createAction(
  '[Search Results Page] Initiate Yt Search ',
  props<{ searchQuery: string }>()
);

export const updateFilters = createAction(
  '[search Results Page] Filters Update',
  props<{
    sortType: 'date' | 'views' | 'likes' | 'none';
    filterBy: string;
  }>()
);
