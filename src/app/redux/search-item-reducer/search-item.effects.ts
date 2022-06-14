import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError} from 'rxjs/operators';
import { VideoResponse} from 'src/app/youtube/models/yt-models';
import { SearchService } from 'src/app/youtube/services/search.service';
import { initiateSearch, searchItemsError, updateSearchItems } from './search-item.actions';

@Injectable()
export class SearchEffects {
  searchItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(initiateSearch),
      exhaustMap((action) =>
        this.searchService.makeSearch(action.searchQuery).pipe(
          map((searchItems: VideoResponse) => {
            return updateSearchItems({ searchItems: searchItems.items });
          }),
          catchError((error: unknown) =>{
           return of (error as HttpErrorResponse).pipe(map((err: HttpErrorResponse) => searchItemsError({error: err})))
          })
        )
      )
    );
  });
  constructor(
    private actions$: Actions,
    private searchService: SearchService
  ) {}
}
