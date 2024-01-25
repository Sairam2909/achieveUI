import { Component } from '@angular/core';
import { Router,  RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router) {}

  redirectToSelfReview() {
    this.router.navigate(['/self-review']);
  }
}
