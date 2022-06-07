import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { HeroesRoutingModule } from './heroes-routing.module';

import { AddHeroPageComponent } from './pages/add-hero-page/add-hero-page.component';
import { SearchHeroesPageComponent } from './pages/search-heroes-page/search-heroes-page.component';
import { SingleHeroPageComponent } from './pages/single-hero-page/single-hero-page.component';
import { HeroesHomePageComponent } from './pages/heroes-home-page/heroes-home-page.component';
import { HeroesListPageComponent } from './pages/heroes-list-page/heroes-list-page.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';

import { HeroImagePipe } from './pipes/image.pipe';

@NgModule({
  declarations: [
    AddHeroPageComponent,
    SearchHeroesPageComponent,
    SingleHeroPageComponent,
    HeroesHomePageComponent,
    HeroesListPageComponent,
    HeroCardComponent,
    // Pipes
    HeroImagePipe,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    HeroesRoutingModule,
  ],
})
export class HeroesModule {}
