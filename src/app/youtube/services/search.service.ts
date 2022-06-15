import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VideoResponse, SearchResponse } from '../models/you-tube-models';
import { map, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  makeSearch(query: string) {
    return this.http
      .get<SearchResponse>(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBY5eUdgQYL-eVEf9Yhr7A-406ScXT2dp8&type=video&maxResults=15&q=${query}&part=snippet`
      )
      .pipe(
        map((result) => result.items.map((item) => item.id.videoId).join(',')),
        switchMap((ids) =>
          this.http.get<VideoResponse>(
            `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBY5eUdgQYL-eVEf9Yhr7A-406ScXT2dp8&id=${ids}&part=snippet,statistics`
          )
        )
      );
  }
}
