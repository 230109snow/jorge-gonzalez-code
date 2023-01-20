import { Component } from '@angular/core';
import { Hero } from '../HeroInterface';

// Class file for the Heroes Component

// We always have to import the Component decorator from the Angular 
// core library to annotate the component class with @Component

// @Component is a decoration function that specifies the Angular
// metadata for the component
@Component({
  // These are known as metadata properties
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  // These styles are private to this component
  styleUrls: ['./heroes.component.css'] 
})

// We always export a component class so we can import it elsewhere, like in AppModule
// If we don't export a component class, we can't import it anywhere
export class HeroesComponent {
  
  // Now, we declare our hero property as a type of "Hero"
  // Now, we must align with the properties that are declared inside the HeroInterface
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  }
}
