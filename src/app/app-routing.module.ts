import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { HomeComponent } from './home/home.component';
import { SourcesComponent } from './sources/sources.component';

const routes: Routes = [
  {path: '', 
  component: HomeComponent},
  {path: 'headlines',
  component: HeadlinesComponent},
  {path: 'sources',
  component: SourcesComponent},
  {path: 'favorites',
  component: FavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
