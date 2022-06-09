import { Component } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

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
  public heroToAdd: Hero = {
    superhero: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
    alter_ego: '',
  };
  constructor(private heroesService: HeroesService) {}
  addHero() {
    if (!this.heroToAdd.superhero.trim()) return;
    this.heroesService.addHero(this.heroToAdd).subscribe(console.log);
  }
}
