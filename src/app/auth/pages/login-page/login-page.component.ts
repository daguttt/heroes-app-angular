import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [],
})
export class LoginPageComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  login(): void {
    this._router.navigate(['/heroes']);
  }
}
