
import {
  Component,
  ViewEncapsulation,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, ObservableInput } from 'rxjs';
import { User } from 'src/app/auth/models/auth-models';
import { logOut, updateUser } from 'src/app/redux/auth-reducer/auth.action';
import { getUser } from 'src/app/redux/auth-reducer/auth.selector';
import { initiateSearch } from 'src/app/redux/search-item-reducer/search-item.actions';
import { PageState } from 'src/app/redux/state-related-models';
import { getUserItems } from 'src/app/redux/user-items-reducer/user-items.selector';
/*import { AuthService } from 'src/app/auth/auth.service';
import { UserObjInt } from 'src/app/auth/models/user-model';
import { ResponseManagementService } from '../../services/response-management.service';*/

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  searchString!: string;
  /*user!: null | UserObjInt;*/
  user$ : Observable<User | null>
  filtersVisible: boolean
  @Output() initSearch = new EventEmitter<string>();
  constructor(
    /*public respService: ResponseManagementService,
    public router: Router,
    public authService: AuthService*/
    public store: Store<PageState>
  ) {}

  ngOnInit(): void {
    this.searchString = '';
    this.filtersVisible = false
    /*this.user = this.authService.user;*/
    this.user$ = this.store.select(getUser)
  }

  signOut() {
    /*this.authService.signOut();
    this.user = this.authService.user;*/
    this.store.dispatch(logOut());
  }

  submitSearch() {
    /*this.respService.makeSearchQuery(this.searchString))*/
    /*this.respService.makeSearchQuery(this.searchString).subscribe();*/
    /*this.initSearch.emit(this.searchString);*/
    console.log('search submitted with', this.searchString)
    this.store.dispatch(initiateSearch({ searchQuery: this.searchString }))
  }
}
