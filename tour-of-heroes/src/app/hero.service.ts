import { Injectable } from '@angular/core';
import { Hero } from './HeroInterface'
import { HEROES } from './mockHeroes'
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

// This HeroService class is going to provide an injectible service
export class HeroService {
  
  // Inject the MessageService into HeroService
  constructor(private messageService: MessageService) {

  }

  getHeroes(): Observable<Hero[]> {
  
    // of(HEROES) returns an Observable<Hero[]> that emits a single value, an array of heroes
    const heroes = of(HEROES);

    // When we invoke getHeroes, we add this message to the messages array
    // in message.service.ts, and since the length is not 0,
    // the div inside the MessagesComponent template renders
    this.messageService.add('Hero Service: fetched heroes')
    
    return heroes;
  }

  getHero(rank: Number): Observable<Hero> {

    // We'll get the rank of her hero through the parameter
    // and find the hero from HEROES whose rank matches with the one that was passed
    const hero = HEROES.find(hero => hero.rank === rank)!;

    // Add a message to the MessageService
    this.messageService.add(`HeroService: fetched hero ${hero.name}`)

    return of(hero);
  }

}
