import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id))
  }

  getHeroesSlow(): Promise<Hero[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(HEROES);
      }, 2000);
    })
  }

}
