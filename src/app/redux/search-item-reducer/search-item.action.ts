import { createAction, props } from '@ngrx/store';
import { ResponseVidInt } from 'src/app/youtube/models/yt-models';

export const updateSearchItems = createAction(
  '[Search Results Page] Yt Search',
  props<{ searchItems: ResponseVidInt[] }>()
);
