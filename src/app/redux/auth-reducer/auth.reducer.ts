import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/auth/models/auth-models';
import { updateUser } from './auth.action';

export const initialState: User | {} = {};

export const userReducer = createReducer(
  initialState,
  on(updateUser, (state, { user }) => user)
);
