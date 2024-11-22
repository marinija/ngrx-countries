import { Component, OnInit } from '@angular/core';
import { AsyncPipe, JsonPipe, SlicePipe } from '@angular/common';
import { combineLatest, map, Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { countryActions } from '../../store/actions';
import { selectCountriesState, selectIsLoading } from '../../store/reducer';
import { ICountryList } from '@shared/types/countries';
import { LoadingComponent } from '@shared/loading/loading.component';

@Component({
  selector: 'section.countries',
  templateUrl: 'countries.page.html',
  imports: [
    AsyncPipe,
    JsonPipe,
    LoadingComponent,
    SlicePipe
  ],
  standalone: true
})
export class CountriesPage implements OnInit {

  data$!: Observable<ICountryList>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(countryActions.countries());
    this.data$ = combineLatest({
      isLoading: this.store.select(selectIsLoading),
      countries: this.store.select(selectCountriesState)
    }).pipe(
      tap((combined) => console.log('combineLatest emission:', combined)),
      map(({ isLoading, countries }) => ({
        isLoading,
        countries: countries.countries
      }))
    );
  }
}
