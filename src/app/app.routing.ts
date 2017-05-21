import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroTopComponent } from './hero-top/hero-top.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HeroTopComponent,
  },
  {
    path: 'heroes',
    component: HeroesComponent,
  },
  {
    path: 'heroes/:id',
    component: HeroDetailComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
