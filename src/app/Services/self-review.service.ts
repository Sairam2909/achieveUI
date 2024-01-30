import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelfReviewService {

  apiURL = `http://localhost:3000/selfReview/`;

  constructor(private http: HttpClient) { }

  saveReview(reqBody): Observable<any> {
    return this.http.post(`${this.apiURL}`, reqBody);
  }

  updateReview(reqBody, userId): Observable<any> {
    return this.http.put(this.apiURL + userId, reqBody)
  }

  deleteReview(userId): Observable<any> {
    return this.http.delete(this.apiURL + userId);
  }

  getAllSelfReviews(): Observable<any> {
    return this.http.get(this.apiURL + 'allSelfReviews');
  }

  getReviewByUserId(userId):Observable<any> {
    return this.http.get(this.apiURL + userId);
  }
}
