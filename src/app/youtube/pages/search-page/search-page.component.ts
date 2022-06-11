import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { FiltersState } from 'src/app/redux/filters-reducer/filters.reducer';
import { selectFilters } from 'src/app/redux/filters-reducer/filters.selector';
import { selectSearchItems } from 'src/app/redux/search-item-reducer/search-item.selector';
import { ResponseVidInt } from '../../models/yt-models';
import sortFuncs from '../../utils/filter-functions';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPageComponent implements OnInit {
  vids!: ResponseVidInt[];
  vids$: Observable<ResponseVidInt[]>;
  filters$: Observable<FiltersState>;
  filteredVids$: Observable<[ResponseVidInt[], FiltersState]>;
  constructor(private store: Store, private cr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.vids$ = this.store.select(selectSearchItems);
    this.filters$ = this.store.select(selectFilters);
    this.filteredVids$ = combineLatest([this.vids$, this.filters$]);
    this.filteredVids$.subscribe((val: [ResponseVidInt[], FiltersState]) => {
      this.vids = val[0]
        .filter((el) =>
          el.snippet.title.toLowerCase().includes(val[1].filterBy)
        )
        .sort(sortFuncs[val[1].sortType]);
      this.cr.detectChanges();
    });
  }
  vidById(index: number, vid: ResponseVidInt) {
    return vid.id;
  }
}
