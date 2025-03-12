import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-create-note',
    templateUrl: './create-note.component.html',
    styleUrls: ['./create-note.component.css'],
    imports:[FormsModule]
})
export class CreateNoteComponent {
    note = { title: '', content: '' };

    constructor(private http: HttpClient, private router: Router,private authservice:AuthService) {}

    saveNote() {
        const token = this.authservice.getToken(); 

        if (!token) {
            alert('User not authenticated!');
            return;
        }

        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

        this.http.post('http://localhost:8080/api/notes/createNote', this.note, { headers }).subscribe(
            () => {
                alert('Note saved successfully!');
                this.router.navigate(['/dashboard']);
            },
            error => {
                console.error('Error saving note:', error);
                alert('Failed to save note');
            }
        );
    }
}
