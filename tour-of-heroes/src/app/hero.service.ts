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

}
