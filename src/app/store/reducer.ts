import { createFeature, createReducer, on } from "@ngrx/store";
import { ICounties } from "../shared/types/countries";
import { countryActions } from "./actions";

const initialState: ICounties[] = [];

export const countriesFeature = createFeature({
  name: 'countries',
  reducer: createReducer(
    initialState,
    on(countryActions.countriesSuccess, (state, {countries}) => ({...state, countries}))
  )
});

export const {
  name: countriesFeatureKey,
  reducer: countriesReducer,
  selectCountriesState
} = countriesFeature;
