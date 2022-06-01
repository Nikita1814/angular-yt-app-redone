import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { UserCardsPageComponent } from './pages/user-cards-page/user-cards-page.component';
import { DetailedVideoPageComponent } from './pages/detailed-video-page/detailed-video-page.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { FiltersComponent } from './components/filters/filters.component';
import { UserItemFormComponent } from './components/user-item-form/user-item-form.component';



@NgModule({
  declarations: [
    SearchPageComponent,
    UserCardsPageComponent,
    DetailedVideoPageComponent,
    HeaderComponent,
    SearchItemComponent,
    UserItemComponent,
    FiltersComponent,
    UserItemFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class YoutubeModule { }
