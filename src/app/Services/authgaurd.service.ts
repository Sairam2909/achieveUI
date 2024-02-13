import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService {

  isLoggedIn: boolean = false;
  
  constructor(private router: Router,
              private loginService: LoginService) { }

  authenticateUser(reqBody) {
    const storedToken = localStorage.getItem('token');
  
    if (storedToken) {
      this.loginService.verifyToken(storedToken).subscribe((res) => {
        if (res.status) {
          this.handleSuccessfulAuthentication();
        } else {
          this.handleFailedAuthentication(reqBody);
        }
      });
    } else {
      this.handleFailedAuthentication(reqBody);
    }
  }
  
  handleSuccessfulAuthentication() {
    this.isLoggedIn = true;
    this.router.navigate(['/dashboard']);
  }
  
  handleFailedAuthentication(reqBody) {
    localStorage.removeItem('token');
    this.authUser(reqBody);
  }
  
  authUser(reqBody) {
    this.loginService.authenticate(reqBody).subscribe(
      (res) => {
        localStorage.setItem('token', res.originalToken);
        this.handleSuccessfulAuthentication();
      },
      (error) => {
        if (error.status === 401) {
          alert(error.error);
        }
      }
    );
  }
}
