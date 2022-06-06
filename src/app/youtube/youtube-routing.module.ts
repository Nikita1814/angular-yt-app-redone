import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { UserCardsPageComponent } from './pages/user-cards-page/user-cards-page.component';

const routes: Routes = [
  { path: '', component: SearchPageComponent },
  //{ path: 'vid/:id', component: SearchItemDetailedComponent },
  { path: 'user-forms', component: UserCardsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
