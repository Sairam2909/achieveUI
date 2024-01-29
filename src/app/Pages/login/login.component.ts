import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('username')username: ElementRef;
  @ViewChild('password')password: ElementRef;

  constructor(private auth: AuthgaurdService) {}

  redirectToDashboard() {
    this.auth.verify(this.username.nativeElement.value, this.password.nativeElement.value);
  }
}
