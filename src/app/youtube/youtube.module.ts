import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './pages/search-page/search-page.component';

import { DetailedVideoPageComponent } from './pages/detailed-video-page/detailed-video-page.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchItemComponent } from './components/search-item/search-item.component';

import { FiltersComponent } from './components/filters/filters.component';
import { UserItemFormComponent } from './components/user-item-form/user-item-form.component';
import { UserCardsComponent } from './pages/user-cards-page/user-cards-page.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './services/search.service';
import { WordFilterPipe } from './pipes/word-filter.pipe';
import { WordSortPipe } from './pipes/word-sort.pipe';


@NgModule({
  declarations: [
    SearchPageComponent,
    UserCardsComponent,
    DetailedVideoPageComponent,
    HeaderComponent,
    SearchItemComponent,
    UserItemComponent,
    FiltersComponent,
    UserItemFormComponent,
    SearchService,
    WordFilterPipe,
    WordSortPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ]
})
export class YoutubeModule { }
