import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { ResponseInt } from 'src/app/youtube/models/yt-models';

import { SearchService } from 'src/app/youtube/services/search.service';
import { initiateSearch, updateSearchItems } from './search-item.actions';

@Injectable()
export class SearchEffects {

  /*loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType('[Movies Page] Load Movies'),
    mergeMap(() => this.moviesService.getAll()
      .pipe(
        map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
        catchError(() => EMPTY)
      ))
    )
  );*/

  searchItems$ = createEffect(() => this.actions$.pipe(
    ofType(initiateSearch),
    exhaustMap(action =>
      this.searchService.makeSearch(action.searchQuery).pipe(
        map((searchItems: ResponseInt) => updateSearchItems( {searchItems: searchItems.items})))
      )))


/*searchItems$ = createEffect(() => {
  return  this.actions$.pipe(
    ofType(initiateSearch),
    exhaustMap((action: Action) =>
      this.searchService.makeSearch(action.searchQuery).pipe(map( searchItemsList ) => updateSearchItems( {searchItems: searchItemsList}))))
})*/
  constructor(
    private actions$: Actions,
    /*private moviesService: MoviesService*/
    private  searchService: SearchService
  ) {}
}

