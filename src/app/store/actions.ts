import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { ICounties } from '@shared/types/countries';

export const countryActions = createActionGroup({
  source: 'countries',
  events: {
    Countries: emptyProps(),
    'Countries Success': props<{ countries: ICounties[]} >(),
    'Countries Failure': emptyProps()
  }
});
