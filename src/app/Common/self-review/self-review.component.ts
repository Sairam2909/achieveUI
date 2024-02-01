import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SelfReviewService } from '../../Services/self-review.service';

@Component({
  selector: 'app-self-review',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './self-review.component.html',
  styleUrl: './self-review.component.css'
})
export class SelfReviewComponent {
  selfReviews = [];
  constructor(private router: Router,
              private selfReviewService: SelfReviewService) {}

  ngOnInit(){
    this.getAllReviews();
  }

  getAllReviews() {
    this.selfReviewService.getAllSelfReviews().subscribe((res)=>{
      this.selfReviews = res;
    })
  }

  editReview(id) {
    this.router.navigate([`/self-review-form/${id}`])
  }

}
