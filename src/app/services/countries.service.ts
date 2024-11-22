import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICounties } from '../shared/types/countries';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private readonly apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  countriesList() {
    return this.http.get<ICounties[]>(`${this.apiUrl}/all`).pipe(tap(res => console.log(res)));
  }
}
