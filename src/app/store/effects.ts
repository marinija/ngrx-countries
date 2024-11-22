import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { countryActions } from "./actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { ICounties } from '@shared/types/countries';
import { CountriesService } from '@services/countries.service';

export const countriesEffect = createEffect((
  actions$ = inject(Actions),
  countriesService = inject(CountriesService)
) => {
  return actions$.pipe(
    ofType(countryActions.countries),
    exhaustMap(() => countriesService.countriesList().pipe(
      map((countries: ICounties[]) => countryActions.countriesSuccess({countries})),
      catchError(() => of(countryActions.countriesFailure()))
    )
  )
  )
}, { functional: true })
