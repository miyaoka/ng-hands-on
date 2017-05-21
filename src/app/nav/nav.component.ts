import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-hero-nav',
  templateUrl: './nav.component.html',
 })

export class NavComponent {
  title = 'hello angular!';
  heroes: Hero[]
  selectedHero: Hero;
}
