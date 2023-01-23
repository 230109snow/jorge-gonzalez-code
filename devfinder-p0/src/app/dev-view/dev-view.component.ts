import { Component } from '@angular/core';

@Component({
  selector: 'app-dev-view',
  templateUrl: './dev-view.component.html',
  styleUrls: ['./dev-view.component.css']
})
export class DevViewComponent {

  dev = {
    imgUrl: "https://avatars.githubusercontent.com/u/583231?v=4",
    name: "The Octocat",
    githubHandle: "octocat",
    bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
    joinDate: "25 Jan 2011",
    repos: 13231,
    followers: 312323938,
    following: 21413
  }

  // fetchDev() {
  //   console.log("fetching dev");
  // }

}
