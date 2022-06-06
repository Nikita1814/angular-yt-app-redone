import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './pages/search-page/search-page.component';

import { DetailedVideoPageComponent } from './pages/detailed-video-page/detailed-video-page.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchItemComponent } from './components/search-item/search-item.component';

import { FiltersComponent } from './components/filters/filters.component';
import { UserItemFormComponent } from './components/user-item-form/user-item-form.component';
import { UserCardsPageComponent } from './pages/user-cards-page/user-cards-page.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './services/search.service';
import { WordFilterPipe } from './pipes/word-filter.pipe';
import { WordSortPipe } from './pipes/word-sort.pipe';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SearchPageComponent,
    UserCardsPageComponent,
    DetailedVideoPageComponent,
    HeaderComponent,
    SearchItemComponent,
    UserItemComponent,
    FiltersComponent,
    UserItemFormComponent,
    WordFilterPipe,
    WordSortPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    YoutubeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class YoutubeModule { }
