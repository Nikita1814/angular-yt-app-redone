import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/auth/models/auth-models';
import { UserCardInfo } from 'src/app/youtube/models/yt-models';
import { updateUserItems } from './user-items.actions';


export const initialState: UserCardInfo[] | [] = [];

export const userItemsReducer = createReducer(
  initialState,
  on(updateUserItems, (state, { userItem }) : UserCardInfo[]=> [...state, userItem])
);
