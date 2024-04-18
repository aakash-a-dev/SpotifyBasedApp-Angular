import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-spotify-callback',
  templateUrl: './spotify-callback.component.html',
  styleUrl: './spotify-callback.component.css'
})
export class SpotifyCallbackComponent implements OnInit{
constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Extract parameters from URL
    this.route.queryParams.subscribe(params => {
      const code = params['code']; // Extract authorization code from URL
      // Process the authorization code (e.g., exchange it for an access token)
      console.log('Authorization code:', code);
      // You can then redirect or perform other actions based on the received code
    });
  }
}
