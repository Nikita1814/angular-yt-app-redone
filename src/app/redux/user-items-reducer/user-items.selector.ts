import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from 'src/app/auth/models/auth-models';
import { UserCardInfo } from 'src/app/youtube/models/yt-models';

const userItemsSelector = createFeatureSelector<UserCardInfo[]>('userItems');

export const getUserItems = createSelector(
  userItemsSelector,
  (state: UserCardInfo[]) => state
);
