import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {

  username: string = '';

  constructor() {}

  @Output() btnClick = new EventEmitter();

  placeholder: string = "Search GitHub user..."

  fetchDev(): void {

    console.log(`The user typed: ${this.username}`)

    this.btnClick.emit("data from search bar");

  }
  
}
