import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-other-review-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './other-review-form.component.html',
  styleUrl: './other-review-form.component.css'
})
export class OtherReviewFormComponent {
  reactiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
) {}


  redirectToDashboard(){
    this.router.navigate(['/dashboard']);
  }

}
