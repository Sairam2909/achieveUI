import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelfReviewService {
  apiURL = `http://localhost:3000/selfReview/`;
  otherReviewApiUrl = `http://localhost:3000/otherReview/`

  constructor(private http: HttpClient) { }

  saveSelfReview(reqBody): Observable<any> {
    return this.http.post(`${this.apiURL}`, reqBody);
  }

  updateSelfReview(id, reqBody): Observable<any> {
    return this.http.put(this.apiURL + id, reqBody);
  }

  deleteSelfReview(id): Observable<any> {
    return this.http.delete(this.apiURL + id);
  }

  getAllSelfReviews(): Observable<any> {
    return this.http.get(this.apiURL + 'allSelfReviews');
  }

  getSelfReviewById(id):Observable<any> {
    return this.http.get(this.apiURL + id);
  }
  
  getEmployeeList(): Observable<any> {
    return this.http.get(this.otherReviewApiUrl);
  }

  updateOtherReviews(userId, reqBody): Observable<any> {
    return this.http.put(this.otherReviewApiUrl + userId, reqBody);
  }
  
  getAllOtherReviews(): Observable<any> {
    return this.http.get(this.otherReviewApiUrl + 'allOtherReviews');
  }

  getOtherReviewByUserId(userId):Observable<any> {
    return this.http.get(this.otherReviewApiUrl + 'otherReviews/' + userId);
  }

  saveOtherReview(reqBody): Observable<any> {
   return this.http.post(this.otherReviewApiUrl, reqBody); 
  }
  
  submitOtherReview(reqBody): Observable<any> {
   return this.http.post(this.otherReviewApiUrl, reqBody); 
  }

}
