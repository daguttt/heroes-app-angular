import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-home-page',
  templateUrl: './heroes-home-page.component.html',
  styles: [
    `
      .container {
        padding: 10px;
      }
    `,
  ],
})
export class HeroesHomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
