import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  apiURL = `http://localhost:8080/goals/`;

  constructor(private http: HttpClient) { }

  saveGoals(reqBody): Observable<any> {
    const headers = new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json'
    });
    const options = { headers };
    return this.http.post(`${this.apiURL}`, reqBody);
  }


  getGoals(): Observable<any> {
      return this.http.get(this.apiURL + 'allGoals');
  }

  getGoalsByGoalId(id): Observable<any> {
      return this.http.get(this.apiURL + id);
  }

  deleteGoal(goalId): Observable<any> {
      return this.http.delete(this.apiURL + goalId);
  }

  updateGoal(id, reqBody): Observable<any> {
      const headers = new HttpHeaders({
          Accept: 'application/json',
          'Content-Type': 'application/json'
      });
      const options = { headers };
      return this.http.put(this.apiURL + id, reqBody);
  }
}
