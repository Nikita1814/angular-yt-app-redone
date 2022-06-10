import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/auth/models/auth-models';
import { logOut, updateUser } from './auth.action';

export const initialState: User | {} = {};

export const userReducer = createReducer(
  initialState,
  on(updateUser, (state, { user }) => user),
  on(logOut, (state) =>  state = {})
);
