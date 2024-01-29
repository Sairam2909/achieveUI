import { Component } from '@angular/core';
import { Router,  RouterLink } from '@angular/router';
import { HeaderComponent } from "../../Common/header/header.component";
import { FooterComponent } from "../../Common/footer/footer.component";
import { GoalsDashboardComponent } from "../goals-dashboard/goals-dashboard.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [HeaderComponent, FooterComponent, GoalsDashboardComponent]
})
export class DashboardComponent {
  constructor(private router: Router) {}

  redirectToSelfReview() {
    this.router.navigate(['/self-review']);
  }
}
