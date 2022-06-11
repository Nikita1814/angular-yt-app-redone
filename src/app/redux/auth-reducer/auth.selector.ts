import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from 'src/app/auth/models/auth-models';

const selectUserFeature = createFeatureSelector<User>('userData');

export const selectUser = createSelector(
  selectUserFeature,
  (state: User) => state
);
