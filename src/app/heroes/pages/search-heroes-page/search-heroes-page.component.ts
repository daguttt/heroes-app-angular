import { Component } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-heroes-page',
  templateUrl: './search-heroes-page.component.html',
  styles: [],
})
export class SearchHeroesPageComponent {
  public search: string = '';
  public heroes: Hero[] = [];
  constructor(private heroesService: HeroesService) {}
  onSearch() {
    this.heroesService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes));
  }
}
