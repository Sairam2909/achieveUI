import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-self-review-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './self-review-form.component.html',
  styleUrl: './self-review-form.component.css'
})
export class SelfReviewFormComponent implements OnInit{
  reactiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router
    ) {}

  ngOnInit(){
    this.initializeForm();
  }

  initializeForm() {
    this.reactiveForm = this.formBuilder.group({
      appraisalYear: ['5'],
      description: [''],
      selfRating: ['5']
  });
}

    redirectToSelfReview() {
      this.router.navigate(['/self-review']);
    }
}
