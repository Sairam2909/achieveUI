import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService {

  constructor(private router: Router) { }

  verify(user, pass) {
    if(user === 'user' && pass === 'pass'){
      this.router.navigate(['/dashboard']);
    } else {
      alert('You entered wrong username and password');
    }
  }
}
