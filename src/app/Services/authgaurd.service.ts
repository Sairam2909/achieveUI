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
    this.loginService.authenticate(reqBody).subscribe((res) => {

      if (res.isSuccess === true) {
        this.isLoggedIn = true;
        this.router.navigate(['/dashboard']);
      } else if (res.isSuccess === false) {
        alert('Wrong credentials entered');
      }

    })
  }
}
