import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-performance-review-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './performance-review-card.component.html',
  styleUrl: './performance-review-card.component.css'
})
export class PerformanceReviewCardComponent implements OnInit{

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.redirectToOtherReviewForm;
    this.redirectToPerformanceReview;
    this.redirectToOtherReviewForm;
  }

  redirectToPerformanceReview() {
    this.router.navigate(['/performance-reviews']);
  }

  redirectToOtherReviewForm(){
    this.router.navigate(['/other-review-form']);
  }

  redirectToSelfReviewForm(){
    this.router.navigate(['/self-review-form']);
  }

}
