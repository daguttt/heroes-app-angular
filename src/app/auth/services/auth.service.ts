import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _serverUrl: string = environment.serverUrl;
  constructor(private _http: HttpClient) {}
  login(): Observable<User> {
    return this._http.get<User>(`${this._serverUrl}/usuarios/1`);
  }
}
