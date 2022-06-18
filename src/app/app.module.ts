import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { searchItemsReducer } from './redux/search-item-reducer/search-item.reducer';
import { userItemsReducer } from './redux/user-items-reducer/user-items.reducer';
import { userReducer } from './redux/auth-reducer/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from './redux/search-item-reducer/search-item.effects';
import { HttpClientModule } from '@angular/common/http';
import { localStorageSync } from 'ngrx-store-localstorage';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

const reducers = {
  searchResults: searchItemsReducer,
  userItems: userItemsReducer,
  userData: userReducer,
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
    NoopAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
