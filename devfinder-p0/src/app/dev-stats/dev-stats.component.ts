import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dev-stats',
  templateUrl: './dev-stats.component.html',
  styleUrls: ['./dev-stats.component.css']
})
export class DevStatsComponent {

  @Input() repos: number;
  @Input() followers: number;
  @Input() following: number;

  constructor() {
    this.repos = 0;
    this.followers = 0;
    this.following = 0;
  }

}
