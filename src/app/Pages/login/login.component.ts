import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthgaurdService } from '../../Services/authgaurd.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private auth: AuthgaurdService) {}


redirectToDashboard() {
  // this.router.navigate(['/dashboard']);
  this.auth.verify('user', 'pass');
}
}
