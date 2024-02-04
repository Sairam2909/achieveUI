import { Component, OnInit } from '@angular/core';
import { SelfReviewService } from '../../Services/self-review.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provided-reviews',
  standalone: true,
  imports: [],
  templateUrl: './provided-reviews.component.html',
  styleUrl: './provided-reviews.component.css'
})
export class ProvidedReviewsComponent implements OnInit{
  
  reviews;

  constructor(private selfReviewService: SelfReviewService,
              private router: Router) {}

  ngOnInit() {
    this.selfReviewService.getAllOtherReviews().subscribe((res) => {
      this.reviews = res;
    })
  }

  editReview(userId, i) {
    this.router.navigate([`other-review-form/${userId}/${i}`])
  }
}
