import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
        height: 50vw;
        max-height: 700px;
        aspect-ratio: 9/16;
        border-radius: 5px;
      }
      @media screen and (max-width: 599px) {
        img {
          object-fit: cover;
          object-position: 50% 0;
          height: auto;
          max-height: auto;
          width: 100%;
        }
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
    private _heroesService: HeroesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    if (!this._router.url.includes('edit')) {
      this.isForEditing = false;
      return;
    }
    this.isForEditing = true;
    this._activatedRoute.params
      .pipe(switchMap(({ id }) => this._heroesService.getHeroById(id)))
      .subscribe((hero) => (this.hero = hero));
  }
  addHero() {
    if (!this.hero.superhero.trim()) return;
    if (!this.hero.alt_img)
      return alert('No se puede agregar un héroe sin su imagen');
    if (!this.hero.id) {
      this._heroesService.addHero(this.hero).subscribe(console.log);
      this.showSnackBar(`"${this.hero.superhero}" se ha añadido con éxito.`);
      this._router.navigate(['/heroes']);
      return;
    }
    this._heroesService.updateHero(this.hero).subscribe(console.log);
    this.showSnackBar(`"${this.hero.superhero}" se ha editado con éxito.`);
    this._router.navigate(['/heroes', this.hero.id]);
  }
  removeHero() {
    this._heroesService.removeHero(this.hero.id!).subscribe((res) => {
      this._router.navigate(['/heroes']);
    });
  }
  showSnackBar(message: string) {
    this._snackBar.open(message, 'OK!', {
      duration: 4000,
    });
  }
}
