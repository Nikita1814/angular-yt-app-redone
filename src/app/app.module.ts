import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { searchItemsReducer } from './redux/search-item-reducer/search-item.reducer';
import { userItemsReducer } from './redux/user-items-reducer/user-items.reducer';
import { userReducer } from './redux/auth-reducer/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { filtersReducer } from './redux/filters-reducer/filters.reducer';
import { SearchEffects } from './redux/search-item-reducer/search-item.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      searchResults: searchItemsReducer,
      userItems: userItemsReducer,
      userData: userReducer,
      filters:  filtersReducer
    }),
    EffectsModule.forRoot([SearchEffects]),

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
