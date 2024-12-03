import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { ICounties } from '@shared/types/countries';
import { IBackendErrors } from '@shared/types/backend-errors';

export const countryActions = createActionGroup({
  source: 'countries',
  events: {
    Countries: emptyProps(),
    'Countries Success': props<{ countries: ICounties[]}>(),
    'Countries Failure': props<{ error: IBackendErrors }>(),
    'Countries Search': props<{search: string}>(),
    'Countries Search Success': props<{ countries: ICounties[]}>(),
    'Countries Search Failure': props<{ error: IBackendErrors }>()
  }
});
