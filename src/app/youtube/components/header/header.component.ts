import {
  Component,
  ViewEncapsulation,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/models/auth-models';
import { logOut } from 'src/app/redux/auth-reducer/auth.actions';
import { selectUser } from 'src/app/redux/auth-reducer/auth.selector';
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
  searchString!: string;
  user$: Observable<User | null>;
  filtersVisible: boolean;
  constructor(public store: Store) {}

  ngOnInit(): void {
    this.searchString = '';
    this.filtersVisible = false;
    this.user$ = this.store.select(selectUser);
  }

  signOut() {
    this.store.dispatch(logOut());
  }

  submitSearch() {
    this.store.dispatch(initiateSearch({ searchQuery: this.searchString }));
  }
}
