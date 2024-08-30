import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from "../register/register.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, RegisterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  http = inject(HttpClient);
  registerMode = false;
  users: any;

  ngOnInit(): void {
    this.getUsers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  getUsers() {
    this.http.get('http://localhost:5000/api/users').subscribe({
      next: (res) => (this.users = res),
      error: (err) => console.log(err),
      complete: () => console.log('Request completed'),
    });
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}
