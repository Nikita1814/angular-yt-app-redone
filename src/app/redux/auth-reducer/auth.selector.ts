import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from 'src/app/auth/models/auth-models';

const userSelector = createFeatureSelector<User | null>('user');

export const getUser = createSelector(
  userSelector,
  (state: User | null) => state
);
