import { Component, Input } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [],
})
export class HeroCardComponent {
  @Input() public hero!: Hero;
}
