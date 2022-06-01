import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/auth/models/auth-models';
import { UserCardInfo } from 'src/app/youtube/models/yt-models';

export const updateUserItems = createAction(
  '[Search Results Page] Yt Search',
  props<{ userItems: UserCardInfo[] }>()
);
