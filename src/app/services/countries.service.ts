import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ICounties, ISearchedCountries } from '@shared/types/countries';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private readonly apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  countriesList(): Observable<ICounties[]> {
    return this.http.get<ICounties[]>(`${this.apiUrl}/all`);
  }

  searchCountryName(search: string): Observable<ICounties[]> {
    return this.http.get<ICounties[]>(`${this.apiUrl}/name/${search}`).pipe(
      tap(response => console.log('Raw API response:', response))
    );
  }
}
