import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AnimalsViewComponent } from './pages/animals-view/animals-view.component';
import { VideoViewComponent } from './pages/video-view/video-view.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CreditsPageComponent } from './pages/credits-page/credits-page.component';
import { NotFoundComponent } from './pages/404/not-found.component';
import { ComponentsModule } from './components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    ComponentsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    AnimalsViewComponent,
    VideoViewComponent,
    HomePageComponent,
    CreditsPageComponent,
    NotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
