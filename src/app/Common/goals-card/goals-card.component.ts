import { Component, OnInit } from '@angular/core';
import { Router,  RouterLink } from '@angular/router';
import { GoalsService } from '../../Services/goals.service';

@Component({
  selector: 'goals-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './goals-card.component.html',
  styleUrl: './goals-card.component.css'
})
export class GoalsCardComponent implements OnInit{

  allGoals = [];
  // goalsDueIn30Days: number = 0;
  daysLeft: number;
  constructor(private router: Router,
              private goalService: GoalsService) {}
  
  redirectToViewGoals() {
    this.router.navigate(['/view-goals']);
  }

  redirectToCreateGoalForm() {
    this.router.navigate(['/create-goal']);
  }
  
  ngOnInit() {
    this.goalService.getGoals().subscribe((res) => {
      this.allGoals = res;
      this.countCompletedGoals();
    })
  }

  countCompletedGoals(){
    return this.allGoals.filter(goal => goal.status === 'completed').length;
  }

  countGoalsDueIn30Days() {
    const today = new Date();
    const thirtyDaysFromNow = new Date(today);
    thirtyDaysFromNow.setDate(today.getDate() + 30);
  
    return this.allGoals.filter(goal => {
      const dueDate = new Date(goal.dueDate); 
      return dueDate <= thirtyDaysFromNow;
    }).length;
  }
  
  
}
