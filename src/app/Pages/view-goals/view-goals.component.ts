import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GoalsService } from '../../Services/goals.service';

@Component({
  selector: 'app-view-goals',
  standalone: true,
  imports: [],
  templateUrl: './view-goals.component.html',
  styleUrl: './view-goals.component.css'
})
export class ViewGoalsComponent {

  allGoals = [];
  daysLeft: number;
  
  constructor(private router: Router,
              private goalService: GoalsService) {}

    
  ngOnInit() {
    this.goalService.getGoals().subscribe((res) => {
      this.allGoals = res;
    })
  }
  
  redirectToCreateGoalForm() {
    this.router.navigate(['/create-goal']);
  }

  redirectToDashboard() {
    this.router.navigate(['../dashboard']);
  }

  getNumberOfDays(i) {
    const timeDifference = new Date(this.allGoals[i].dueDate).getTime() - new Date().getTime();
    return this.daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24));
  }

  editGoal(i) {
    this.router.navigate([`Goal/${this.allGoals[i].userId}/${this.allGoals[i].goalId}`]);
  }

}
