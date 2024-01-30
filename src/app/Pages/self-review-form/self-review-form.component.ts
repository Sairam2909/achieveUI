import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SelfReviewService } from '../../Services/self-review.service';


@Component({
  selector: 'app-self-review-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './self-review-form.component.html',
  styleUrl: './self-review-form.component.css'
})
export class SelfReviewFormComponent implements OnInit{
  reactiveForm: FormGroup;
  saveReviewInDb: number = 0; // Default value
  userId: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private selfReviewService: SelfReviewService,
              private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(){
    this.initializeForm();
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.userId) {
      this.getReviewById(this.userId)
    }
  }

  initializeForm() {
    this.reactiveForm = this.formBuilder.group({
      appraisalYear: ['5'],
      description: [''],
      selfRating: ['5']
    });
  }

  getReviewById(userId) {
    this.selfReviewService.getReviewByUserId(userId).subscribe((res)=>{
      console.log(res);
      // this.saveReviewInDb = res[0].isSaved;
      this.reactiveForm.controls['description'].patchValue(res[0].reviewComment);
      this.reactiveForm.controls['selfRating'].patchValue(res[0].reviewRating);
    })
  }

  redirectToSelfReview() {
    this.router.navigate(['/self-review']);
  }

  saveReview() {
    const reqBody = [{
      managerId: 89,
      reviewComment: this.reactiveForm.value.description,
      reviewRating: this.reactiveForm.value.selfRating,
      status: "In Draft",
      cycleYear: this.reactiveForm.value.appraisalYear,
      customerId:989,
      userId: "df34",
      isDeleted: false
    }]
    if(this.saveReviewInDb === 0) {
      this.selfReviewService.saveReview(reqBody).subscribe((res) => {
        console.log(res);
      })
    }
    else if(this.saveReviewInDb === 1) {
      this.selfReviewService.updateReview(reqBody, this.userId).subscribe((res) => {
        console.log(res);
      })
    }
    this.router.navigate(['../self-review']);
  }

  submitReview() {
    const reqBody = [{
      managerId: 89,
      reviewComment: this.reactiveForm.value.description,
      reviewRating: this.reactiveForm.value.selfRating,
      status: "Submitted",
      cycleYear: this.reactiveForm.value.appraisalYear,
      customerId:989,
      userId: "df34",
      isDeleted: false
    }]
    if(this.saveReviewInDb === 0) {
      this.selfReviewService.saveReview(reqBody).subscribe((res) => {
        console.log(res);
      })
    }
    else if(this.saveReviewInDb === 1) {
      this.selfReviewService.updateReview(reqBody, this.userId).subscribe((res) => {
        console.log(res);
      })
    }
    this.router.navigate(['../self-review']);
  }
}
