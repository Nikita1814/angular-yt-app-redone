import { Action, ActionReducer } from "@ngrx/store";
import { User } from "../auth/models/auth-models";
import { ResponseInt, UserCardInfo } from "../youtube/models/yt-models";
import { FiltersState } from "./filters-reducer/filters.reducer";


export interface PageState {
  searchResults: ActionReducer<ResponseInt[] | [], Action>
  userItems: ActionReducer<UserCardInfo[] | [], Action>;
  userData:ActionReducer<User, Action>;
  filters: ActionReducer<FiltersState, Action>
}
