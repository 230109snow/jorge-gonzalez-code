import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-dev-stats',
  templateUrl: './dev-stats.component.html',
  styleUrls: ['./dev-stats.component.css']
})
export class DevStatsComponent implements OnChanges {

  @Input() repos: number;
  @Input() followers: number;
  @Input() following: number;
  @Input() githubHandle: string;
  @Input() company: string;
  @Input() location: string;
  @Input() blog: string;

  ngOnChanges() {
    if (this.blog.substring(0, 7) == "http://") {
      this.blog = this.blog.substring(7);
    }
  }

  constructor() {
    this.repos = 0;
    this.followers = 0;
    this.following = 0;
    this.githubHandle = '';
    this.company = '';
    this.location = '';
    this.blog = ''
  }

}
