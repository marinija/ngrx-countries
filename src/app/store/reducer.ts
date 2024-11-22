import { createFeature, createReducer, on } from '@ngrx/store';
import { ICountryList } from '@shared/types/countries';
import { countryActions } from './actions';

const initialState: ICountryList = {
  countries: [],
  isLoading: false
};

export const countriesFeature = createFeature({
  name: 'countries',
  reducer: createReducer(
    initialState,
    on(countryActions.countries, (state) => ({ ...state, isLoading: true })),
    on(countryActions.countriesSuccess, (state, { countries }) => ({ ...state, countries, isLoading: false })),
    on(countryActions.countriesFailure, (state) => ({ ...state, isLoading: false }))
  )
});

export const {
  name: countriesFeatureKey,
  reducer: countriesReducer,
  selectCountriesState,
  selectIsLoading
} = countriesFeature;
