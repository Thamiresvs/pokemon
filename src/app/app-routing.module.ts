import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './city/city.component';

const routes: Routes = [
  // { path: 'pokemon-list', component: PokemonListComponent },
  // { path: 'pokemon-details/:id', component: PokemonDetailsComponent },
  { path: '', redirectTo: '/pokemon-list', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
