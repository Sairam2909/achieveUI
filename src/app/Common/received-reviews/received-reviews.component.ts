import { Component } from '@angular/core';
import { SelfReviewService } from '../../Services/self-review.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-received-reviews',
  standalone: true,
  imports: [],
  templateUrl: './received-reviews.component.html',
  styleUrl: './received-reviews.component.css'
})
export class ReceivedReviewsComponent {
    
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
