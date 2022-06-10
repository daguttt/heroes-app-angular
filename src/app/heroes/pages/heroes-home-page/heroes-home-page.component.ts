import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-home-page',
  templateUrl: './heroes-home-page.component.html',
  styles: [
    `
      .container {
        padding: 20px;
      }
    `,
  ],
})
export class HeroesHomePageComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  logout(): void {
    this._router.navigate(['/auth/login']);
  }
}
