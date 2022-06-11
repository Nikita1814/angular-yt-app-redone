import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from 'src/app/auth/models/auth-models';

const selectUser = createFeatureSelector<User>('userData');

export const getUser = createSelector(selectUser, (state: User) => state);
