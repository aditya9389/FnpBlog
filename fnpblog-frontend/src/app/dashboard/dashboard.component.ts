import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { Messaging, getToken } from '@angular/fire/messaging';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule, RouterModule]
})
export class DashboardComponent {
  messaging = inject(Messaging);
  notes: any[] = [];
  notesFetched = false; // To track if notes were fetched

  constructor(private http: HttpClient, private router: Router, private authservice: AuthService) { }

  getNotes() {
    const token = this.authservice.getToken();
    if (!token) {
      console.error('No token found! Redirecting to login.');
      this.router.navigate(['/login']);
      return;
    }
    console.log('Fetching notes...');
    console.log('Token:', token);

    this.http.get('http://localhost:8080/api/notes/getNotes', {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe(
      (response: any) => {
        this.notes = response;
        this.notesFetched = true; // Mark notes as fetched
      },
      error => {
        console.error('Error fetching notes:', error);
        this.notesFetched = false; // Prevent infinite loading
      }
    );
    this.requestPermission(); //for getting req to send notifcation
  }
  logout() {
    const token = this.authservice.getToken();
    const headers = { Authorization: `Bearer ${token}` };
  
    this.http.post('http://localhost:8080/api/users/logout', {}, { 
      headers, 
      responseType: 'text'  // 👈 Fix empty response issue
    }).subscribe({
      next: (response) => {
        console.log('Logged out successfully:', response);
        this.authservice.removeToken();
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Error logging out:', error);
      }
    });
  
    console.log("Token before logout:", this.authservice.getToken()); // This will still show token
  }
  

  createNote() {
    this.router.navigate(['/create-note']);
  }
  requestPermission() {
    getToken(this.messaging, {
      vapidKey: "BFtXckS1N_bWq2efccLBoSvPiKd2Ccw7Kw54hIOpF4GBYCPpDmnTJrcrwhQ9jSk_dmA5fcQO1hhkAEaQjm65SiM"
    }).then(token => {
      console.log("FCM Token:", token);
    }).catch(err => {
      console.error("Error getting FCM token", err);
    });
  }
}
