import { createAction, props } from '@ngrx/store';
import { UserCardInfo } from 'src/app/youtube/models/yt-models';

export const updateUserItems = createAction(
  '[User Items Page] Card creation',
  props<{ userItem: UserCardInfo }>()
);
