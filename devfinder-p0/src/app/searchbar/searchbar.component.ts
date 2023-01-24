import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {

  placeholder: string = "Search for a GitHub user..."
  username: string = '';

  @Output() btnClick = new EventEmitter();

  fetchDev(): void {
    this.btnClick.emit(this.username);
  }
  
}
