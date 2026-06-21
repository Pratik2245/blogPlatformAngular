import { Component, inject, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  private authService = inject(AuthService

  );

  username = '';
  email = '';
  password = '';

  register() {

    const data = {
      username: this.username,
      email: this.email,
      password: this.password
    }

    this.authService
      .register(data)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          alert("Registrationo successful")
        },
        error: (err: any) => {
          console.log(err);

        }
      })
  }


}
