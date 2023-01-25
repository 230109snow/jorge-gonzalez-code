import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {

  placeholder: string = "Search for a GitHub user..."
  username?: string;

  notFound:boolean = false;

  @Output() btnClick = new EventEmitter();

  fetchDev(): void {
    fetch(`https://api.github.com/users/${this.username}`)
      .then(res => {
        res.json()
          .then(data => {
            const objLength = Object.keys(data).length;

            if (objLength != 32) {
              this.notFound = true;
            } else {
              this.notFound = false;
              this.btnClick.emit(this.username);
            }
          })
      }) 
  }
}
