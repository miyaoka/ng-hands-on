import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'hello angular!';
  heroes: Hero[]
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  ngOnInit(): void {
    this.getHeroes();
  }

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }
}
