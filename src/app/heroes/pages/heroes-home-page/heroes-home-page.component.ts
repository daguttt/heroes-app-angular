import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-heroes-home-page',
  templateUrl: './heroes-home-page.component.html',
  styles: [
    `
      .container {
        padding: 20px;
      }
      .username {
        margin-right: 10px;
      }
    `,
  ],
})
export class HeroesHomePageComponent implements OnInit {
  constructor(private _router: Router, private _authService: AuthService) {}
  get auth() {
    return this._authService.auth;
  }
  ngOnInit(): void {}

  logout(): void {
    this._authService.logout();
    this._router.navigate(['/auth/login']);
  }
}
