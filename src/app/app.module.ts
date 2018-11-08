import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        "path":"",
        "component":UserProfileComponent
      },
      {
        "path":"sign-up",
        "component":SignUpComponent
      },
      {
        "path":"user",
        "component":UserProfileComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }