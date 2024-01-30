import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiURL = `http://localhost:3000/login/`;

  constructor(private http: HttpClient) { }

  authenticate(reqBody): Observable<any> {
    return this.http.post(`${this.apiURL}`, reqBody);
  }
}
