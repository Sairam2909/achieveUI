import { Component } from '@angular/core';
import { GoalsCardComponent } from "../../Common/goals-card/goals-card.component";
import { PerformanceReviewCardComponent } from '../../Common/performance-review-card/performance-review-card.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [GoalsCardComponent, PerformanceReviewCardComponent ]
})
export class DashboardComponent {
 
}
