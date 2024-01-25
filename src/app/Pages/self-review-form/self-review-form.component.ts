import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-self-review-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './self-review-form.component.html',
  styleUrl: './self-review-form.component.css'
})
export class SelfReviewFormComponent {
  reactiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {}

    redirectToSelfReview() {
      this.router.navigate(['/self-review']);
    }
}
