import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { DetailedVideoPageComponent } from './pages/detailed-video-page/detailed-video-page.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { FiltersComponent } from './components/filters/filters.component';
import { UserItemFormComponent } from './components/user-item-form/user-item-form.component';
import { UserItemsPageComponent } from './pages/user-items-page/user-items-page.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { HttpClientModule } from '@angular/common/http';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';

@NgModule({
  declarations: [
    SearchPageComponent,
    UserItemsPageComponent,
    DetailedVideoPageComponent,
    HeaderComponent,
    SearchItemComponent,
    UserItemComponent,
    FiltersComponent,
    UserItemFormComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    YoutubeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NbLayoutModule,
    NbButtonModule,
    NbInputModule,
    NbCardModule,
    NbFormFieldModule,
    NbIconModule,
    NbSidebarModule
  ],
})
export class YoutubeModule {}
