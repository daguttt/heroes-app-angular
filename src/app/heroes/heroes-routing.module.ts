import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHeroPageComponent } from './pages/add-hero-page/add-hero-page.component';
import { HeroesListPageComponent } from './pages/heroes-list-page/heroes-list-page.component';
import { SearchHeroesPageComponent } from './pages/search-heroes-page/search-heroes-page.component';
import { SingleHeroPageComponent } from './pages/single-hero-page/single-hero-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: HeroesListPageComponent,
      },
      {
        path: 'add',
        component: AddHeroPageComponent,
      },
      {
        path: 'edit/:id',
        component: AddHeroPageComponent,
      },
      {
        path: 'search',
        component: SearchHeroesPageComponent,
      },
      {
        path: ':id',
        component: SingleHeroPageComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
