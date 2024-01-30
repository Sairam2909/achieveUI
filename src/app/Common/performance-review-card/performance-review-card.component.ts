import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-performance-review-card',
  standalone: true,
  imports: [],
  templateUrl: './performance-review-card.component.html',
  styleUrl: './performance-review-card.component.css'
})
export class PerformanceReviewCardComponent {

  constructor(private router: Router) {}

  redirectToSelfReview() {
    this.router.navigate(['/self-review']);
  }

}
