import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-spotify-login',
  templateUrl: './spotify-login.component.html',
  styleUrl: './spotify-login.component.css'
})
export class SpotifyLoginComponent {
constructor(private router: Router) {}

  login() {
    const client_id = environment.clientId;
    const redirect_uri = 'http://localhost:4200/callback';
    const state = this.generateRandomString(16);
    const scope = 'user-read-private user-read-email';

    window.location.href = 'https://accounts.spotify.com/authorize?' +
      `response_type=code&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}&state=${state}`;
  }

  generateRandomString(length: number): string {
    // Implementation of generateRandomString function
    return ''; // Implement this function according to your requirements
  }
}
