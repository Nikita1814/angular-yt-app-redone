import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/auth/models/auth-models';

export const updateUser = createAction(
  '[Login Page] Login',
  props<{ user: User }>()
);
