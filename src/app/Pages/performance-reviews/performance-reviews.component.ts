import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SelfReviewComponent } from '../../Common/self-review/self-review.component';
import { ProvidedReviewsComponent } from '../../Common/provided-reviews/provided-reviews.component';
import { ReceivedReviewsComponent } from '../../Common/received-reviews/received-reviews.component';

@Component({
  selector: 'app-performance-reviews',
  standalone: true,
  imports: [RouterModule, SelfReviewComponent, ProvidedReviewsComponent, ReceivedReviewsComponent],
  templateUrl: './performance-reviews.component.html',
  styleUrl: './performance-reviews.component.css'
})
export class PerformanceReviewsComponent {
  selectedOption: string = '';
  
}
