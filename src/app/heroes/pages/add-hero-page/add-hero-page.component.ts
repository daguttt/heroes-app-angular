import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
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
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
  // styles: [],
})
export class AddHeroPageComponent implements OnInit {
  public publisherList = [Publisher.DCComics, Publisher.MarvelComics];
  public hero: Hero = {
    superhero: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
    alter_ego: '',
  };
  public isForEditing: boolean = true;
  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      this.isForEditing = false;
      return;
    }
    this.isForEditing = true;
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroById(id)))
      .subscribe((hero) => (this.hero = hero));
  }
  addHero() {
    if (!this.hero.superhero.trim()) return;
    if (!this.hero.alt_img)
      return alert('No se puede agregar un héroe sin su imagen');
    this.hero.id
      ? // Edit hero
        this.heroesService.updateHero(this.hero).subscribe(console.log)
      : // Insert new hero
        this.heroesService.addHero(this.hero).subscribe(console.log);
    this.router.navigate(['/heroes', this.hero.id]);
  }
}
