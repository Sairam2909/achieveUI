import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SelfReviewService } from '../../Services/self-review.service';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-other-review-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgSelectModule, FormsModule],
  templateUrl: './other-review-form.component.html',
  styleUrl: './other-review-form.component.css'
})
export class OtherReviewFormComponent implements OnInit{
  reactiveForm: FormGroup;
  selectedEmployee: string;
  selectedEmployeeId: number;
  userId: string;
  index: number;
  reviewReadOnly: boolean = false;
  otherReviewSaved: boolean = false;
  employeeList = [
    { id: 1, name: 'Rahul' },
    { id: 2, name: 'Nikhil' },
    { id: 3, name: 'Sohan' },
    { id: 4, name: 'Tejas' },
    { id: 5, name: 'Adarsh' },
    { id: 6, name: 'Amit' },
    { id: 7, name: 'Sonam' },
    { id: 8, name: 'Mihir' },
    { id: 9, name: 'Dhanush' },
    { id: 10, name: 'Spoorthi' },
    { id: 11, name: 'Meghana' },
    { id: 12, name: 'Anu' },
    { id: 13, name: 'Kumar' },
    { id: 14, name: 'Das' },
  ];
  

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private selfReviewService: SelfReviewService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.initializeForm();
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.index = Number(this.activatedRoute.snapshot.paramMap.get('index'));
    if(this.userId) {
      this.getOtherReviewById(this.userId)
    }
  }

  getOtherReviewById(userId) {
    this.selfReviewService.getOtherReviewByUserId(userId).subscribe((res) => {
      // console.log(res);
      this.reviewReadOnly = true;
      this.otherReviewSaved = res[0].isSaved;
      this.reactiveForm.controls['description'].patchValue(res[this.index].reviewComment);
      this.reactiveForm.controls['selfRating'].patchValue(res[this.index].reviewRating);
      this.reactiveForm.controls['appraisalYear'].patchValue(res[this.index].cycleYear);
      this.reactiveForm.controls['selectedEmployee'].patchValue(res[this.index].receiveId);
    })
  }

  onEmployeeSelected(val) {
    this.selectedEmployee = val?.name || '';
    this.selectedEmployeeId = val?.id || '';
  }

  initializeForm() {
    this.reactiveForm = this.formBuilder.group({
      appraisalYear: ['2023-2024'],
      description: [''],
      selfRating: ['5'],
      selectedEmployee: new FormControl(null),
    });
  }

  redirectToPerformanceReviews(){
    this.router.navigate(['../performance-reviews']);
  }

  saveReview() {
    const reqBody = [{
      reviewComment: this.reactiveForm.value.description,
      reviewRating: this.reactiveForm.value.selfRating,
      status: "In Draft",
      senderName: "Thomas",
      receiveName: this.selectedEmployee,
      senderId: 2001,
      receiveId: "1001",
      cycleYear: this.reactiveForm.value.appraisalYear,
      isSaved: 1,
      customerId:989,
      userId: "23",
      isDeleted: false,
      appraisalCycleId: 'TI1'   
    }]
    if(this.otherReviewSaved === false) {
      this.selfReviewService.saveOtherReview(reqBody).subscribe((res) => {
        console.log(res);
      })
    }
    else if(this.otherReviewSaved === true) {
      this.selfReviewService.updateOtherReviews(this.userId, reqBody).subscribe((res) => {
        console.log(res);
      })
    }
    this.redirectToPerformanceReviews();
  }
  
  submitReview() {
    const reqBody = [{
      reviewComment: this.reactiveForm.value.description,
      reviewRating: this.reactiveForm.value.selfRating,
      status: "Submitted",
      senderName: "Thomas",
      receiveName: this.selectedEmployee,
      senderId: 2001,
      receiveId: this.selectedEmployeeId,
      cycleYear: this.reactiveForm.value.appraisalYear,
      isSaved: 0,
      customerId:989,
      userId: "23",
      isDeleted: false,
      appraisalCycleId: 'TI1' 
    }]
    if(this.otherReviewSaved === false) {
      this.selfReviewService.saveOtherReview(reqBody).subscribe((res) => {
        console.log(res);
      })
    }
    else if(this.otherReviewSaved === true) {
      this.selfReviewService.updateOtherReviews(this.userId, reqBody).subscribe((res) => {
        console.log(res);
      })
    }
    this.redirectToPerformanceReviews();
  }
}
