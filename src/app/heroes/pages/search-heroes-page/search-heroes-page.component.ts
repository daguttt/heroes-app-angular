import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private heroesService: HeroesService, private router: Router) {}
  // -**********************************-
  // Implement Debounce Time 😜
  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe((currentSearch) => this.searchSuggestions(currentSearch));
  }
  onInput() {
    this.debouncer.next(this.currentSearch.trim());
  }
  // -**********************************-
  searchSuggestions(currentSearch: string) {
    this.heroesService
      .getHeroesSuggestions(currentSearch)
      .subscribe((heroes) => (this.heroesSuggestions = heroes));
  }
  searchHero(e: MatAutocompleteSelectedEvent) {
    if (!e.option.value) return;
    const hero: Hero = e.option.value;
    this.currentSearch = hero.superhero;
    this.router.navigate(['/heroes', hero.id]);
  }
}
