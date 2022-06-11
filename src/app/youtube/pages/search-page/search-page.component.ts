
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FiltersState } from 'src/app/redux/filters-reducer/filters.reducer';
import { selectFilters } from 'src/app/redux/filters-reducer/filters.selector';
import { selectSearchItems } from 'src/app/redux/search-item-reducer/search-item.selector';
import { PageState } from 'src/app/redux/state-related-models';
import { ResponseVidInt } from '../../models/yt-models';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPageComponent implements OnInit {
  vids!: ResponseVidInt[]
  vids$: Observable<ResponseVidInt[]>
  filters$: Observable<FiltersState>
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.vids$ = this.store.select(selectSearchItems)
    this.filters$ = this.store.select(selectFilters)
  }
  vidById(index: number, vid: ResponseVidInt) {
    return vid.id;
}
}
