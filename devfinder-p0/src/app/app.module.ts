import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { DevViewComponent } from './dev-view/dev-view.component';
import { DevStatsComponent } from './dev-stats/dev-stats.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    DevViewComponent,
    DevStatsComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
