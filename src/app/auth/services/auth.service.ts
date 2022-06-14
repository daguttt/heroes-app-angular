import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _serverUrl: string = environment.serverUrl;
  private _auth: Auth | undefined;
  constructor(private _http: HttpClient) {}

  get auth(): Auth {
    return { ...this._auth! };
  }

  verifyAuth(): Observable<boolean> | boolean {
    if (!localStorage.getItem('token')) return of(false);
    return this._http.get<Auth>(`${this._serverUrl}/usuarios/1`).pipe(
      tap((auth) => (this._auth = auth)),
      map(() => true)
    );
  }
  login(): Observable<Auth> {
    return this._http.get<Auth>(`${this._serverUrl}/usuarios/1`).pipe(
      tap((auth) => (this._auth = auth)),
      tap((auth) => localStorage.setItem('token', auth.id))
    );
  }
  logout(): void {
    localStorage.removeItem('token');
    this._auth = undefined;
  }
}
