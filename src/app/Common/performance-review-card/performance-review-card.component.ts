import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-performance-review-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './performance-review-card.component.html',
  styleUrl: './performance-review-card.component.css'
})
export class PerformanceReviewCardComponent {

  constructor(private router: Router) {}

  redirectToSelfReview() {
    this.router.navigate(['/self-review']);
  }

}
