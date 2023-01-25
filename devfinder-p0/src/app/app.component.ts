import { Component } from '@angular/core';
import { Dev } from './devInterface';
import { dev } from './mockData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // devObj: Dev;
  devObj: any;

  title: string = 'devFinder';

  constructor() {
    this.devObj = dev;
  }

  fetchDev(username: string) {

    fetch(`https://api.github.com/users/${username}`)
      .then(res => {
      res.json()
      .then(data => {
        this.devObj.imgUrl = data.avatar_url;
        this.devObj.name = data.name;
        this.devObj.githubHandle = data.login;
        this.devObj.bio = data.bio;
        this.devObj.joinDate = data.created_at;
        this.devObj.repos = data.public_repos;
        this.devObj.followers = data.followers;
        this.devObj.following = data.following;
        this.devObj.location = data.location;
        this.devObj.company = data.company;
        this.devObj.blog = data.blog;
      });
    })

  }

}
