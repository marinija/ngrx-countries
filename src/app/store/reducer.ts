import { createFeature, createReducer, on } from '@ngrx/store';
import { ICountryList, ISearchedCountries } from '@shared/types/countries';
import { countryActions } from './actions';

const initialState: ICountryList & ISearchedCountries = {
  countries: [],
  isLoading: false,
  search: '',
  searchedCountries: []
};

export const countriesFeature = createFeature({
  name: 'countries',
  reducer: createReducer(
    initialState,
    on(countryActions.countries, (state) => ({ ...state, isLoading: true })),
    on(countryActions.countriesSuccess, (state, { countries }) => ({ ...state, countries, isLoading: false, searchedCountries: [] })),
    on(countryActions.countriesFailure, (state) => ({ ...state, isLoading: false })),
    on(countryActions.countriesSearch, (state, {search}) => ({ ...state, search, isLoading: true })),
    on(countryActions.countriesSearchSuccess, (state, { countries }) => ({ ...state, searchedCountries: countries, isLoading: false })),
    on(countryActions.countriesSearchFailure, (state) => ({ ...state, isLoading: false }))
  )
});

export const {
  name: countriesFeatureKey,
  reducer: countriesReducer,
  selectCountriesState,
  selectIsLoading,
  selectSearchedCountries
} = countriesFeature;
