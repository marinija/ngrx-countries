import { Component, OnInit } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ICounties } from '../../shared/types/countries';
import { Store } from '@ngrx/store';
import { countryActions } from '../../store/actions';
import { selectCountriesState } from '../../store/reducer';

@Component({
  selector: 'section.countries',
  templateUrl: 'countries.page.html',
  imports: [
    AsyncPipe,
    JsonPipe
  ],
  standalone: true
})
export class CountriesPage implements OnInit {

  countries$!: Observable<ICounties[]>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(countryActions.countries());
    this.countries$ = this.store.select(selectCountriesState);
  }
}
