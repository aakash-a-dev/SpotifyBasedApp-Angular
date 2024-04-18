import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { SpotifyLoginComponent } from './MyComponents/spotify-login/spotify-login.component';
import { SpotifyCallbackComponent } from './MyComponents/spotify-callback/spotify-callback.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SpotifyLoginComponent,
    SpotifyCallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
