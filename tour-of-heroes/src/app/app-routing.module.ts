import { NgModule } from '@angular/core';
// RouterModule and Routes gives the application routing capability
import { RouterModule, Routes } from '@angular/router'
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// A typical Angular Route has two properties: path and component
// - path is a string that matches the URL in the browser address bar
// - component is the component the router should create when navigating to this route
const routes: Routes = [
  // The default route becomes /dashboard because on empty path, we redirect to /dashboard
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:rank', component: HeroDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
