import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-list-page',
  templateUrl: './heroes-list-page.component.html',
  styles: [],
})
export class HeroesListPageComponent implements OnInit {
  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(console.log);
  }
}
