import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthgaurdService } from '../../Services/authgaurd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('username')username: ElementRef;
  @ViewChild('password')password: ElementRef;

  constructor(private auth: AuthgaurdService,
    private router: Router) {}

  // redirectToDashboard() {
  //   const reqBody = {
  //     email: this.username.nativeElement.value,
  //     password: this.password.nativeElement.value
  //   }
  //   this.auth.authenticateUser(reqBody);
  // }

  redirectToDashboard() {
   this.router.navigate(['/dashboard']);
  }
}
