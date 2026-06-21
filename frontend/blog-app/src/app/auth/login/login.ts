import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authServie = inject(AuthService);
  private router = inject(Router);
  email = '';
  password = '';
  login() {
    const data = {
      email: this.email,
      password: this.password
    }
    this.authServie.login(data)
      .subscribe({
        next: (res: any) => {
          localStorage.setItem(
            'token',
            res.token
          );
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }
}
