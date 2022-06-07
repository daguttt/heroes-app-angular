import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroes.interface';

@Pipe({
  name: 'heroImage',
})
export class HeroImagePipe implements PipeTransform {
  transform(hero: Hero): string {
    return hero?.id ? `assets/heroes/${hero.id}.jpg` : 'assets/no-image.png';
  }
}
