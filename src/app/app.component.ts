import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'hello angular!';
  heroes: Hero[]
  selectedHero: Hero;

  // DI
  constructor(heroService: HeroService) {
    this.heroes = heroService.getHeroes();
  }

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }
}
