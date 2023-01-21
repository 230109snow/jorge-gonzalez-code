import { Component, Input } from '@angular/core';
import { Hero } from '../HeroInterface';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {

  // Our hero-detail template markup is bound to this hero property
  // Our HeroesComponent is the parent of this component, so it passes
  // a selected hero for this HeroDetailComponent to display
  @Input() hero?: Hero;

  // The @Input() decorator is necessary because the parent HeroesComponent
  // binds to this hero property through it, and it is an Input type
  // (remember the data flows two ways)
}
