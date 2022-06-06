import { HttpClient } from '@angular/common/http';
import { Injectable, IterableDiffers } from '@angular/core';
import { isTemplateExpression } from 'typescript';
import { ResponseInt, SearchResponseInt } from '../models/yt-models';
import { map, switchMap, catchError, tap } from 'rxjs';
import { throws } from 'assert';
import { PageState } from 'src/app/redux/state-related-models';
import { Store } from '@ngrx/store';
import { updateSearchItems } from 'src/app/redux/search-item-reducer/search-item.actions';
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient, private store: Store<PageState> ) {}

  makeSearch(query: string) {
    return this.http
      .get<SearchResponseInt>(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBY5eUdgQYL-eVEf9Yhr7A-406ScXT2dp8&type=video&maxResults=15&q=${query}&part=snippet`
      )
      .pipe(
        map((result) => result.items.map((item) => item.id.videoId).join(',')),
        switchMap((ids) =>
          this.http.get<ResponseInt>(
            `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBY5eUdgQYL-eVEf9Yhr7A-406ScXT2dp8&id=${ids}&part=snippet,statistics`
          )
        ),
        /*tap((searchResults) => this.store.dispatch(updateSearchItems({ searchItems: searchResults.items })))*/
      )
}
}
