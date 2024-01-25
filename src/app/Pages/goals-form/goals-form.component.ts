import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GoalsService } from '../../Services/goals.service';

@Component({
  selector: 'app-goals-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './goals-form.component.html',
  styleUrl: './goals-form.component.css'
})
export class GoalsFormComponent {

  userName: string = "Thomas";
  reactiveForm: FormGroup;
  userIdForUpdate;
  goalIdForUpdate;
  saveGoalInDb: number = 0; // Default value

  constructor(private formBuilder: FormBuilder,
              private route: Router,
              private activatedRoute: ActivatedRoute,
              private goalService: GoalsService
              ) {}

  ngOnInit() {
    this.initializeForm();
    let routeParams = this.activatedRoute.snapshot.paramMap
    this.userIdForUpdate = routeParams.get('userId');
    this.goalIdForUpdate = routeParams.get('goalId');
    if (this.userIdForUpdate) {
        this.getGoalbyGoalId(this.goalIdForUpdate)// have to pass goalIdForUpdate
    }
  }

  initializeForm() {
      this.reactiveForm = this.formBuilder.group({
          description: [''],
          dueDate: ['']
    });
  }

  onSubmit() {
    const reqBody = [{
        customerId: 5631,
        userId: 123,
        description: this.reactiveForm.value.description,
        status: 'Submitted',
        dueDate: this.reactiveForm.value.dueDate,
        isSaved: 0,
        createdBy: this.userName,
        createdOn: new Date().toJSON().slice(0, 10),
        updatedBy: null,
        updatedOn: null
    }]
    if(this.saveGoalInDb === 0) {
        this.goalService.saveGoals(reqBody).subscribe((res) => {
            res ? alert('Goals saved successfully') : alert('Error in saving goals')
        })
    }
    else if(this.saveGoalInDb === 1) {
        this.goalService.updateGoal(this.goalIdForUpdate, reqBody).subscribe((res) => {
            res ? alert('Goal updated successfully') : alert('Error in updated goals')
        }) 
    }
    this.route.navigate(['']);
  }

  saveGoal() {
    const reqBody = [{
        customerId: 5631,
        userId: 123,
        description: this.reactiveForm.value.description,
        status: 'In Draft',
        dueDate: this.reactiveForm.value.dueDate,
        isSaved: 1,
        createdBy: this.userName,
        createdOn: new Date().toJSON().slice(0, 10),
        updatedBy: null,
        updatedOn: null
    }]
    if (this.saveGoalInDb === 0) {
        this.goalService.saveGoals(reqBody).subscribe((res) => {
            res ? alert('Goal saved successfully') : alert('Error in saving goals')
        })       
    } 
    else {
        this.goalService.updateGoal(this.goalIdForUpdate, reqBody).subscribe((res) => {
            res ? alert('Goal updated successfully') : alert('Error in updated goals')
        })  
    }
    this.route.navigate(['']);
  }

  getGoalbyGoalId(id) {
    this.goalService.getGoalsByGoalId(id).subscribe((res) => {
        // console.log(res);
        this.saveGoalInDb = res[0].isSaved;
        this.reactiveForm.controls['description'].patchValue(res[0].description);
        this.reactiveForm.controls['dueDate'].patchValue(res[0].dueDate);
    })
  }
}