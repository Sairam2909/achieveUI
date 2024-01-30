import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  apiURL = `http://localhost:3000/goals/`;

  constructor(private http: HttpClient) { }

  getAllSelfReviews(): Observable<any> {
    return this.http.get('http://localhost:3000/selfReview/allSelfReviews');
  }

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
