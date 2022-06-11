import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  StoreModule,
  ActionReducerMap,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';
import { searchItemsReducer } from './redux/search-item-reducer/search-item.reducer';
import { userItemsReducer } from './redux/user-items-reducer/user-items.reducer';
import { userReducer } from './redux/auth-reducer/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { filtersReducer } from './redux/filters-reducer/filters.reducer';
import { SearchEffects } from './redux/search-item-reducer/search-item.effects';
import { HttpClientModule } from '@angular/common/http';
import { PageState } from './redux/state-related-models';
import { localStorageSync } from 'ngrx-store-localstorage';

const reducers = {
  searchResults: searchItemsReducer,
  userItems: userItemsReducer,
  userData: userReducer,
  filters: filtersReducer,
};

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: ['searchResults', 'userItems', 'userData', 'filters'],
  })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([SearchEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
