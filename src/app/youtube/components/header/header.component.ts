import {
  Component,
  ViewEncapsulation,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/models/auth-models';
import { AuthFacadeService } from 'src/app/redux/auth-reducer/auth-facade.service';
import { logOut } from 'src/app/redux/auth-reducer/auth.actions';
import { selectUser } from 'src/app/redux/auth-reducer/auth.selector';
import { SearchItemFacadeService } from 'src/app/redux/search-item-reducer/search-item-facade.service';
import { initiateSearch } from 'src/app/redux/search-item-reducer/search-item.actions';
import { PageState } from 'src/app/redux/state-related-models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  searchForm = this.fb.group({
    searchQuery: ['']
  })
  searchString!: string;
  user$: Observable<User | null>;
  filtersVisible: boolean;
  constructor(public store: Store, public fb: FormBuilder, public authFacade: AuthFacadeService, public searchItemFacade: SearchItemFacadeService) {}

  ngOnInit(): void {
    this.searchString = '';
    this.filtersVisible = false;
    this.user$ = this.store.select(selectUser);
  }


  signOut() {
    this.authFacade.logOut();
  }

  submitSearch() {
    this.searchItemFacade.submitSearch(this.searchForm.value.searchQuery)
  }
}
