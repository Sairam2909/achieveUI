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
  reviewIdForUpdate;
  idForUpdate;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private selfReviewService: SelfReviewService,
              private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit() {
    this.initializeForm();
    let routeParams = this.activatedRoute.snapshot.paramMap
    this.reviewIdForUpdate = routeParams.get('id');
    if (this.reviewIdForUpdate) {
        this. getSelfReviewById(this.reviewIdForUpdate)
    }
  }

  initializeForm() {
    this.reactiveForm = this.formBuilder.group({
      appraisalYear: ['2023-2024'],
      description: [''],
      selfRating: ['5']
    });
  }

  getSelfReviewById(userId) {
    this.selfReviewService.getSelfReviewById(userId).subscribe((res)=>{
      console.log(res);
      this.saveReviewInDb = res[0].isSaved;
      this.idForUpdate = res[0].id;
      this.reactiveForm.controls['description'].patchValue(res[0].reviewComment);
      this.reactiveForm.controls['selfRating'].patchValue(res[0].reviewRating);
    })
  }

  redirectTodashboard() {
    this.router.navigate(['/dashboard']);
  }

  redirectToPerformanceReview(){
    this.router.navigate(['/performance-reviews']);
  }

  saveReview() {
    const reqBody = [{
          reviewComment: this.reactiveForm.value.description,
          reviewRating: this.reactiveForm.value.selfRating,
          status: "In Draft",
          cycleYear: this.reactiveForm.value.appraisalYear,
          isSaved: 1,
          customerId:989,
          userId: "23",
          isDeleted: false,
          appraisalCycleId: 'TI1'
        }]
    if (this.saveReviewInDb === 0) {
        this.selfReviewService.saveSelfReview(reqBody).subscribe((res) => {
            res ? alert('self review saved successfully') : alert('Error in saving selfreviews')
        })       
    } 
    else {
        this.selfReviewService.updateSelfReview(this.idForUpdate, reqBody).subscribe((res) => {
            res ? alert('selfreview updated successfully') : alert('Error in updated self review')
        })  
    }
    this.redirectToPerformanceReview();
  }

  onSubmit() {
    // console.log("on submit fired");
    const reqBody = [{
          reviewComment: this.reactiveForm.value.description,
          reviewRating: this.reactiveForm.value.selfRating,
          status: "Submitted",
          cycleYear: this.reactiveForm.value.appraisalYear,
          isSaved: 0,
          customerId:989,
          userId: "23",
          isDeleted: false,
          appraisalCycleId: 'TI1'
        }]
    if(this.saveReviewInDb === 0) {
        this.selfReviewService.saveSelfReview(reqBody).subscribe((res) => {
            res ? alert('self review saved successfully') : alert('Error in saving self review')
        })    
    }
    else if(this.saveReviewInDb === 1) {
        this.selfReviewService.updateSelfReview(this.idForUpdate, reqBody).subscribe((res) => {
            res ? alert('Goal updated successfully') : alert('Error in updated goals')
        }) 
    }
    this.redirectToPerformanceReview();
  }
}
