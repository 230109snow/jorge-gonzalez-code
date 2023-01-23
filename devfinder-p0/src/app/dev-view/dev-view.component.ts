import { Component } from '@angular/core';
import { dev } from '../mockData';
import { Dev } from '../DevInterface';

@Component({
  selector: 'app-dev-view',
  templateUrl: './dev-view.component.html',
  styleUrls: ['./dev-view.component.css']
})
export class DevViewComponent {
  
  constructor() {}

  dev: Dev = dev;

  // dev = {
  //   imgUrl: "https://avatars.githubusercontent.com/u/583231?v=4",
  //   name: "The Octocat",
  //   githubHandle: "octocat",
  //   bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
  //   joinDate: "25 Jan 2011",
  //   repos: 13231,
  //   followers: 312323938,
  //   following: 21413
  // }

  fetchDev() {
    console.log("fetching dev");
  }

}
