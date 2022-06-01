import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { searchItemsReducer } from './redux/search-item-reducer/search-item.reducer';
import { userItemsReducer } from './redux/user-items-reducer/user-items.reducer';
import { userReducer } from './redux/auth-reducer/auth.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      searchResults: searchItemsReducer,
      userItems: userItemsReducer,
      userData: userReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
