import { createReducer, on } from '@ngrx/store';
import { ResponseVidInt } from 'src/app/youtube/models/yt-models';
import { updateSearchItems } from './search-item.actions';


export const initialState: ResponseVidInt[] | [] = [];

export const searchItemsReducer = createReducer(
  initialState,
  on(updateSearchItems, (state, { searchItems }) : ResponseVidInt[] => searchItems)
);
