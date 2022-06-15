import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserCardInfo } from 'src/app/youtube/models/you-tube-models';

const selectUserItemsFeature =
  createFeatureSelector<UserCardInfo[]>('userItems');

export const selectUserItems = createSelector(
  selectUserItemsFeature,
  (state: UserCardInfo[]) => state
);
