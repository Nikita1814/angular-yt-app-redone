import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserCardInfo } from 'src/app/youtube/models/yt-models';

const userItemsSelector = createFeatureSelector<UserCardInfo[]>('userItems');

export const getUserItems = createSelector(
  userItemsSelector,
  (state: UserCardInfo[]) => state
);
