import { Injectable } from '@angular/core';
import { Hero } from './HeroInterface'
import { HEROES } from './mockHeroes'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// This HeroService class is going to provide an injectible service
export class HeroService {

  getHeroes(): Observable<Hero[]> {

    // of(HEROES) returns an Observable<Hero[]> that emits a single value, an array of heroes
    const heroes = of(HEROES);

    return heroes;
  }

  constructor() { }
}
