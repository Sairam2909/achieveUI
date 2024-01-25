import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoalsService } from '../../Services/goals.service';

@Component({
  selector: 'app-goals-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './goals-dashboard.component.html',
  styleUrl: './goals-dashboard.component.css'
})
export class GoalsDashboardComponent implements OnInit{

  allGoals = [];
  daysLeft: number;
  constructor(private router: Router,
              private goalService: GoalsService) {}

  redirectToCreateGoalForm() {
    this.router.navigate(['/create-goal']);
  }
  
  ngOnInit() {
    this.goalService.getGoals().subscribe((res) => {
      this.allGoals = res;
    })
  }

  editGoal(i) {
    this.router.navigate([`Goal/${this.allGoals[i].userId}/${this.allGoals[i].goalId}`]);
  }

  getNumberOfDays(i) {
    const timeDifference = new Date(this.allGoals[i].dueDate).getTime() - new Date().getTime();
    return this.daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24));
  }
}
