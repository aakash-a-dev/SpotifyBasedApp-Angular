import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotifyLoginComponent } from './MyComponents/spotify-login/spotify-login.component';

const routes: Routes = [
  {
    path: '',
    component: SpotifyLoginComponent
  }, // Route for callback
  { path: '**', redirectTo: '' } // Handle other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
