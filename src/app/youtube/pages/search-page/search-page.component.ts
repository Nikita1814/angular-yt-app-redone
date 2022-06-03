import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getSearchItems } from 'src/app/redux/search-item-reducer/search-item.selector';
import { PageState } from 'src/app/redux/state-related-models';
import { ResponseVidInt } from '../../models/yt-models';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  vids!: ResponseVidInt[]
  $vids: Observable<ResponseVidInt[]>
  constructor(private store: Store<PageState>) { }

  ngOnInit(): void {
    this.$vids = this.store.select(getSearchItems)
  }

}
