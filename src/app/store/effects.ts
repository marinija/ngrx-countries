import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CountriesService } from "../services/countries.service";
import { countryActions } from "./actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { ICounties } from "../shared/types/countries";
import { debug } from 'node:util';

export const countriesEffect = createEffect((
  actions$ = inject(Actions),
  countriesService = inject(CountriesService)
) => {
  return actions$.pipe(
    ofType(countryActions.countries),
    exhaustMap(() => countriesService.countriesList().pipe(
      map((countries: ICounties[]) => {
        return countryActions.countriesSuccess({countries})
      }),
      catchError(() => of(countryActions.countriesFailure()))
    )
  )
  )
}, { functional: true })
