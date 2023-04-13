import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { DataService } from './data.service';
import { LoadData, LoadDataError, LoadDataSuccess } from './app.actions';

@Injectable()
export class AppEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadData),
      mergeMap(() =>
        this.dataService.fetchData().pipe(
          map(data => LoadDataSuccess({ data })),
          catchError(error => of(LoadDataError({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {}
}
