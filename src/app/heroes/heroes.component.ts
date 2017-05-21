import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  title = 'hello angular!';
  heroes: Hero[]
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService,
  ) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  selectHero(hero: Hero): void {
    const link = ['/heroes/', hero.id];
    this.router.navigate(link);

//    this.selectedHero = hero;
  }
}
