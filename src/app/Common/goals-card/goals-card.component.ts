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
  daysLeft: number;
  constructor(private router: Router,
              private goalService: GoalsService) {}
  
  redirectToViewGoals() {
    this.router.navigate(['/view-goals']);
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
}
