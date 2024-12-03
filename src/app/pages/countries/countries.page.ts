import { Component, OnInit } from '@angular/core';
import { AsyncPipe, JsonPipe, SlicePipe } from '@angular/common';
import { combineLatest, map, Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { countryActions } from '../../store/actions';
import { selectCountriesFetchError, selectCountriesState, selectIsLoading, selectSearchedCountries, selectSearchFetchError } from '../../store/reducer';
import { ICounties, ICountryList, ISearchedCountries } from '@shared/types/countries';
import { LoadingComponent } from '@shared/loading/loading.component';
import { CountryListComponent } from '@components/country-list/country-list.component';

@Component({
  selector: 'section.countries',
  templateUrl: 'countries.page.html',
  imports: [
    FormsModule,
    AsyncPipe,
    LoadingComponent,
    SlicePipe,
    CountryListComponent,
    JsonPipe
  ],
  standalone: true
})
export class CountriesPage implements OnInit {

  data$!: Observable<ICountryList & Partial<ISearchedCountries>>;
  search = '';

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(countryActions.countries());
    this.data$ = combineLatest({
      isLoading: this.store.select(selectIsLoading),
      countries: this.store.select(selectCountriesState).pipe(
        tap((countries) => console.log('countries emitted:', countries))
      ),
      searchedCountries: this.store.select(selectSearchedCountries),
      countriesFetchError: this.store.select(selectCountriesFetchError),
      searchFetchError: this.store.select(selectSearchFetchError)
    }).pipe(
      tap((combined) => console.log('combineLatest emission:', combined)),
      map(({ isLoading, countries, searchedCountries, countriesFetchError, searchFetchError }) => ({
        isLoading,
        countries: countries.countries,
        searchedCountries,
        countriesFetchError,
        searchFetchError
      }))
    );
  }

  searchCountry(search: string) {
    if (search.length < 2) {
      this.store.dispatch(countryActions.countries());
      return;
    }
    this.store.dispatch(countryActions.countriesSearch({search}));
  }
}
