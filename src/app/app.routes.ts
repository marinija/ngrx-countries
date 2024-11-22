import { Routes } from '@angular/router';
import { CountriesPage } from './pages/countries/countries.page';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: '',
    loadComponent: () => import('./pages/countries/countries.page').then(c => c.CountriesPage)
  }
];
