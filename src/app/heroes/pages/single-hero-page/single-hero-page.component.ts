import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-hero-page',
  templateUrl: './single-hero-page.component.html',
  styles: [],
})
export class SingleHeroPageComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params) => console.log(params['id']));
    this.activatedRoute.params.subscribe(({ id }) => console.log(id));
  }
}
