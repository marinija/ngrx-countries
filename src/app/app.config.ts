import { ApplicationConfig, isDevMode, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import * as countriesEffect from './store/effects';
import { countriesFeatureKey, countriesReducer } from './store/reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(),
    provideStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode(), autoPause: true, trace: false, traceLimit: 75 }),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
    provideEffects([countriesEffect, countriesEffect]),
    provideState(countriesFeatureKey, countriesReducer),
    provideExperimentalZonelessChangeDetection()
]
};
