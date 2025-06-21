import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { environment } from '../../environments/environment'; // Adjust the path as necessary
import { HttpClient } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class GoogleLoginService {
  private loginUrl = `${environment.apiUrl}/oauth2/authorization/google`;

  constructor(private router: Router
    , private authService: AuthService
  ) {}

  googleLogin(): void {
    window.location.href = this.loginUrl;  // Redirect to backend for Google login
  }

  handleLoginRedirect(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      console.log('Received token:', token);  
      this.authService.saveToken(token);  
      this.router.navigate(['/dashboard']);  
    } else {
      console.error('Token not found in URL!');
    }
  }
}
