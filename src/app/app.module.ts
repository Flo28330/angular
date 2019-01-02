import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { ShowMoviesDirective } from './show-movies.directive';
import { HighLightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    MoviesComponent,
    ShowMoviesDirective,
    HighLightDirective,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([

      {
        "path":"sign-up",
        "component":SignUpComponent,
        "pathMatch": "full"
      },
      {
        "path":"user",
        "component":UserProfileComponent,
        "pathMatch": "full"
      },
      {
        "path":"movies",
        "component":MoviesComponent,
        "pathMatch": "full"
      },
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }