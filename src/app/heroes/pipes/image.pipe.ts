import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroes.interface';

@Pipe({
  name: 'heroImage',
})
export class HeroImagePipe implements PipeTransform {
  transform(hero: Hero): string {
    if (!hero.alt_img && !hero.id) return 'assets/no-image.png';
    return hero.alt_img ? hero.alt_img : `assets/heroes/${hero.id}.jpg`;
  }
}
