import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private serverUrl: string = environment.serverUrl;
  constructor(private http: HttpClient) {}
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.serverUrl}/heroes`);
  }
  getHeroById(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.serverUrl}/heroes/${id}`);
  }
  getHeroesSuggestions(currentSearch: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(
      `${this.serverUrl}/heroes?q=${currentSearch}&_limit=6`
    );
  }
}
