import { Component, Input } from '@angular/core';
import { dev } from '../mockData';
import { Dev } from '../devInterface';

@Component({
  selector: 'app-dev-view',
  templateUrl: './dev-view.component.html',
  styleUrls: ['./dev-view.component.css']
})
export class DevViewComponent {

  @Input() dev: Dev;
  
  constructor() {
    this.dev = {
      imgUrl: "",
      name: "",
      githubHandle: "",
      bio: "",
      joinDate: "",
      repos: 0,
      followers: 0,
      following: 0,
      blog: '',
      location: '',
      company: ''
    }
  }

  fetchDev() {
    console.log("fetching dev");
  }

}
