import { Component } from '@angular/core';
import { Router,  RouterLink } from '@angular/router';

@Component({
  selector: 'app-self-review',
  standalone: true,
  imports: [],
  templateUrl: './self-review.component.html',
  styleUrl: './self-review.component.css'
})
export class SelfReviewComponent {
  constructor(private router: Router) {}

  redirectToSelfReviewForm() {
    this.router.navigate(['/self-review-form']);
  }

}
