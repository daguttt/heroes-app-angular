import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { debounceTime, Subject } from 'rxjs';
import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-heroes-page',
  templateUrl: './search-heroes-page.component.html',
  styles: [],
})
export class SearchHeroesPageComponent implements OnInit {
  public currentSearch: string = '';
  public heroesSuggestions: Hero[] = [];
  public debouncer: Subject<string> = new Subject();
  public selectedhero!: Hero;

  constructor(private heroesService: HeroesService) {}
  // -**********************************-
  // Implement Debounce Time 😜
  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe((currentSearch) => this.searchSuggestions(currentSearch));
  }
  onInput() {
    this.debouncer.next(this.currentSearch);
  }
  // -**********************************-
  searchSuggestions(currentSearch: string) {
    this.heroesService
      .getHeroesSuggestions(currentSearch)
      .subscribe((heroes) => (this.heroesSuggestions = heroes));
  }
  searchHero(e: MatAutocompleteSelectedEvent) {
    const hero: Hero = e.option.value;
    this.currentSearch = hero.superhero;
    this.heroesService
      .getHeroById(hero.id!)
      .subscribe((hero) => (this.selectedhero = hero));
  }
}
