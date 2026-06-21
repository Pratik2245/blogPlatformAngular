import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AuthService } from './services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('blog-app');
  private authService = inject(AuthService);
  user: any = null;

  ngOnit() {
    if (localStorage.getItem('token')) {
      this.authService.getCurrentUser()
        .subscribe({
          next: (user) => {
            this.user = user;
            console.log(user);

          }, error: (err) => {
            console.log(err);
          }
        })
    }
  }

  logout() {
    localStorage.removeItem("token");
  }
}
