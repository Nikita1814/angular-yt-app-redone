import { Action, ActionReducer } from '@ngrx/store';
import { User } from '../auth/models/auth-models';
import { VideoResponse, UserCardInfo } from '../youtube/models/yt-models';

export interface PageState {
  searchResults: ActionReducer<VideoResponse[] | [], Action>;
  userItems: ActionReducer<UserCardInfo[] | [], Action>;
  userData: ActionReducer<User, Action>;
}
