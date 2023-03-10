import { Component, OnInit } from '@angular/core';

import { Hero } from '../HeroInterface';
import { HeroService } from '../hero.service'
import { MessageService } from '../message.service';

// Class file for the Heroes Component

// We always have to import the Component decorator from the Angular 
// core library to annotate the component class with @Component

// @Component is a decoration function that specifies the Angular
// metadata for the component
@Component({
  // These are known as metadata properties
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  // Stylesheets in this styleUrls array is scoped to this specific component
  styleUrls: ['./heroes.component.css'] 
})

// We always export a component class so we can import it elsewhere, like in AppModule
// If we don't export a component class, we can't import it anywhere
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  // Receive a heroService when HeroesComponent is created
  // It also simultaneously identifies it as a HeroService injection site
  constructor(private heroService: HeroService) {
    // We could call getHeroes() inside the constructor, but it's not the best practice
    // We should reserve the constructor for initialization
    // and wiring constructor parameters to properties
  }

  // ngOnInit is a lifecycle hook that will run when a component is mounted
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      // we subscribe to get the Observable (analogous to a Promise)
      // and when we get back the heroes, it's assigned to the heroes array property
      .subscribe(heroes => this.heroes = heroes);     
  }
  
}
