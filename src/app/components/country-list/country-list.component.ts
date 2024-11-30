import { Component, input } from '@angular/core';
import { ICounties } from '@shared/types/countries';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'country-list',
  templateUrl: 'country-list.component.html',
  imports: [
    SlicePipe
  ],
  standalone: true
})

export class CountryListComponent {
  countries = input.required<Array<ICounties>>();
}
