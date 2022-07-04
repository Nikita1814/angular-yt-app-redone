import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NbSidebarService } from '@nebular/theme';
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
    private fb: FormBuilder,
    public authFacade: AuthFacadeService,
    private searchItemFacade: SearchItemFacadeService,
    private sidebarService: NbSidebarService
  ) {}

  signOut() {
    this.authFacade.logOut();
  }

  toggleSidebar() {
    this.filtersVisible = !this.filtersVisible;
    if (this.filtersVisible) {
      this.sidebarService.expand('filters-sidebar');
    } else {
      this.sidebarService.toggle(false, 'filters-sidebar');
    }
  }

  submitSearch() {
    this.searchItemFacade.submitSearch(this.searchForm.value.searchQuery);
  }
}
