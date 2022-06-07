import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-list-page',
  templateUrl: './heroes-list-page.component.html',
  styles: [
    `
      mat-card {
        margin-bottom: 20px;
      }
    `,
  ],
})
export class HeroesListPageComponent implements OnInit {
  public heroes: Hero[] = [];
  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes));
  }
}
