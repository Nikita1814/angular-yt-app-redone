import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserCardInfo } from 'src/app/youtube/models/yt-models';

const selectUserItems = createFeatureSelector<UserCardInfo[]>('userItems');

export const getUserItems = createSelector(
  selectUserItems,
  (state: UserCardInfo[]) => state
);
