import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-top',
  templateUrl: './hero-top.component.html',
 })

export class HeroTopComponent {
  title = 'top heroes';
  heroes: Hero[];

  ngOnInit(): void {

  }
}
