import { createAction, props } from '@ngrx/store';
import { ResponseVidInt } from 'src/app/youtube/models/yt-models';

export const updateSearchItems = createAction(
  '[Search Results Page] Yt Search Success',
  props<{ searchItems: ResponseVidInt[] }>()
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
