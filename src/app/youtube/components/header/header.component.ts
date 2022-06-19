import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NbSearchService, NbSidebarService } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { AuthFacadeService } from 'src/app/redux/auth-reducer/auth-facade.service';
import { SearchItemFacadeService } from 'src/app/redux/search-item-reducer/search-item-facade.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  searchForm = this.fb.group({
    searchQuery: [''],
  });
  filtersVisible: boolean = false;
  constructor(
    public store: Store,
    public fb: FormBuilder,
    public authFacade: AuthFacadeService,
    public searchItemFacade: SearchItemFacadeService,
    private sidebarService: NbSidebarService,
    private searchService: NbSearchService
  ) {

    /*this.searchService.onSearchSubmit()
    .subscribe((data) => {
     this.searchItemFacade.submitSearch(data.term)
    })*/
  }

  signOut() {
    this.authFacade.logOut();
  }

  toggleSidebar() {
    this.filtersVisible = !this.filtersVisible
     this.filtersVisible ? this.sidebarService.expand('filters-sidebar') : this.sidebarService.toggle( false, 'filters-sidebar')
  }

  submitSearch() {
    this.searchItemFacade.submitSearch(this.searchForm.value.searchQuery);
  }
}
