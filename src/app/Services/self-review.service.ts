import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelfReviewService {

  apiURL = `http://localhost:3000/selfReview/`;
  otherReviewApiUrl = `http://localhost:3000/otherReview/`

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
  
  getEmployeeList(): Observable<any> {
    return this.http.get(this.otherReviewApiUrl);
  }

  updateOtherReviews(userId, reqBody): Observable<any> {
    return this.http.put(this.otherReviewApiUrl + userId, reqBody);
  }
  
  getAllOtherReviews(): Observable<any> {
    return this.http.get(this.otherReviewApiUrl + 'allSelfReviews');
  }

  getOtherReviewByUserId(userId):Observable<any> {
    return this.http.get(this.otherReviewApiUrl + userId);
  }

  saveOtherReview(reqBody): Observable<any> {
   return this.http.post(this.otherReviewApiUrl, reqBody); 
  }
  
  submitOtherReview(reqBody): Observable<any> {
   return this.http.post(this.otherReviewApiUrl, reqBody); 
  }

}
