import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedVideoPageComponent } from './pages/detailed-video-page/detailed-video-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { UserItemsPageComponent } from './pages/user-items-page/user-items-page.component';

const routes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: 'vid/:id', component: DetailedVideoPageComponent },
  { path: 'user-forms', component: UserItemsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
