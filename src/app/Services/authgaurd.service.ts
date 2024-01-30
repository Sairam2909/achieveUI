import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService {

  constructor(private router: Router) { }
  
  isLoggedIn: boolean = false;
  authenticate(user, pass) {
    if(user === 'user' && pass === 'pass'){
      this.isLoggedIn = true;
      this.router.navigate(['/dashboard']);
    } else {
      alert('Wrong credentials entered');
    }
  }
}
