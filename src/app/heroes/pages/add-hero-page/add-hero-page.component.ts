import { Component } from '@angular/core';
import { Publisher } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-add-hero-page',
  templateUrl: './add-hero-page.component.html',
  // For radio button
  styles: [
    `
      mat-radio-button {
        margin: 0 5px;
      }
    `,
  ],
  // styles: [],
})
export class AddHeroPageComponent {
  public publisherList = [Publisher.DCComics, Publisher.MarvelComics];
}
