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
  addHero(newHero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.serverUrl}/heroes`, newHero);
  }
  updateHero(heroToUpdate: Hero): Observable<Hero> {
    return this.http.put<Hero>(
      `${this.serverUrl}/heroes/${heroToUpdate.id}`,
      heroToUpdate
    );
  }
  removeHero(heroId: string): Observable<any> {
    return this.http.delete<any>(`${this.serverUrl}/heroes/${heroId}`);
  }
}
