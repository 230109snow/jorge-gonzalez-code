import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  placeholder: string = "Search GitHub user..."

  onClick(): void {
    console.log("clicked!");
  }

  
}
