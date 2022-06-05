import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/404/not-found.component';
import { AnimalsViewComponent } from './pages/animals-view/animals-view.component';
import { CreditsPageComponent } from './pages/credits-page/credits-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { VideoViewComponent } from './pages/video-view/video-view.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent, data: {animation: 'Home'} },
  { path: 'animals', component: AnimalsViewComponent, data: {animation: 'Animals'} },
  { path: 'video/:id', component: VideoViewComponent, data: {animation: 'Video'}},
  { path: 'credits', component: CreditsPageComponent, data: {animation: 'Credits'} },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '**', component: NotFoundComponent, },  // Wildcard route for a 404 page
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
