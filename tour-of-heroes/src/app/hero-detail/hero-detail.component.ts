import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../HeroInterface';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {

  // The ActivatedRoute will be how we get the hero to display's rank through the "rank" parameter
  // Location is an Angular service for interacting with the browser - this is how we'll get to the previous view
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const rank = Number(this.route.snapshot.paramMap.get('rank'));
    this.heroService.getHero(rank)
      .subscribe(hero => this.hero = hero);
  }

  // Our hero-detail template markup is bound to this hero property
  // Our HeroesComponent is the parent of this component, so it passes
  // a selected hero for this HeroDetailComponent to display
  @Input() hero?: Hero;

  // The @Input() decorator is necessary because the parent HeroesComponent
  // binds to this hero property through it, and it is an Input type
  // (remember the data flows two ways)

  goBack(): void {
    this.location.back();
  }
}
