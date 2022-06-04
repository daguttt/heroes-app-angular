import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHeroPageComponent } from './pages/add-hero-page/add-hero-page.component';
import { SearchHeroesPageComponent } from './pages/search-heroes-page/search-heroes-page.component';
import { SingleHeroPageComponent } from './pages/single-hero-page/single-hero-page.component';
import { HeroesHomePageComponent } from './pages/heroes-home-page/heroes-home-page.component';
import { HeroesListPageComponent } from './pages/heroes-list-page/heroes-list-page.component';



@NgModule({
  declarations: [
    AddHeroPageComponent,
    SearchHeroesPageComponent,
    SingleHeroPageComponent,
    HeroesHomePageComponent,
    HeroesListPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
