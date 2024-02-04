import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SelfReviewService } from '../../Services/self-review.service';

@Component({
  selector: 'app-performance-review-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './performance-review-card.component.html',
  styleUrl: './performance-review-card.component.css'
})
export class PerformanceReviewCardComponent implements OnInit{

  totalSelfReviews: number;
  totalOtherReviews: number;
  constructor(private router: Router,
              private selfReviewService: SelfReviewService) {}

  ngOnInit(): void {
    this.redirectToOtherReviewForm;
    this.redirectToPerformanceReview;
    this.redirectToOtherReviewForm;
    this.selfReviewService.getAllSelfReviews().subscribe((res) => {
      this.totalSelfReviews = res.length;
    })
    this.selfReviewService.getAllOtherReviews().subscribe((res) => {
      this.totalOtherReviews = res.length;
    })
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
