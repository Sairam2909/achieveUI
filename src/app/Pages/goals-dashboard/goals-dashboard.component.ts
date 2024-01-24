import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goals-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './goals-dashboard.component.html',
  styleUrl: './goals-dashboard.component.css'
})
export class GoalsDashboardComponent {
  constructor(private router: Router) {}

  redirectToCreateGoalForm() {
    this.router.navigate(['/create-goal']);
  }

}
