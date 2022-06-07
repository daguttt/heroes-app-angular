import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-single-hero-page',
  templateUrl: './single-hero-page.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class SingleHeroPageComponent implements OnInit {
  public hero!: Hero;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params) => console.log(params['id']));
    this.activatedRoute.params
      // .pipe(switchMap((p) => this.heroesService.getHeroById(p['id'])))
      .pipe(switchMap(({ id }) => this.heroesService.getHeroById(id)))
      .subscribe((hero) => (this.hero = hero));
  }
  goBack(): void {
    this.router.navigate(['/heroes/list']);
  }
}
