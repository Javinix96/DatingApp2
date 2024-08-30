import { Injectable, inject, signal } from '@angular/core';
import { map } from 'rxjs';
import { User } from '../_models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private http = inject(HttpClient);
  baseUrl = 'http://localhost:5000/api/';
  currentUser = signal<User | null>(null);

  login(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map((res: User) => {
        const user = res;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUser.set(user);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/register', model).pipe(
      map((res: User) => {
        const user = res;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUser.set(user);
        }
        return user;
      })
    );
  }

  // setCurrentUser(user: User) {
  //   this.currentUserSource.next(user);
  // }

  logout() {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
}
