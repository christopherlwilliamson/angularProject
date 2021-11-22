import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { HeadlinesModule } from './headlines/headlines.module';
import { HomeComponent } from './home/home.component';
import { SourcesComponent } from './sources/sources.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'headlines',
    loadChildren: () => import('./headlines/headlines.module').then(m => m.HeadlinesModule)
  },
  {
    path: 'sources',
    loadChildren: () => import('./sources/sources.module').then(m => m.SourcesModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
