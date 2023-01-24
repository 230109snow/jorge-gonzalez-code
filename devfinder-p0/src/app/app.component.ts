import { Component } from '@angular/core';
import { Dev } from './devInterface';
import { dev } from './mockData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'devFinder';

  devObj: Dev = {
    imgUrl: "https://images.squarespace-cdn.com/content/v1/57645625f5e231759e260acf/1492787814435-W5WKPE4KSW1B1N70I31O/Richard",
    name: "Richard Hendricks",
    githubHandle: "rhendricks42",
    bio: "I'm building the world's best compression company, Pied Piper.",
    joinDate: "Oct 24 2008",
    repos: 8,
    followers: 3938,
    following: 4
  }

  parentUpdate(message: string) {
    console.log(message)
  }

  // receiveDevData(dev: Dev) {
  //   return dev;
  // }

}
