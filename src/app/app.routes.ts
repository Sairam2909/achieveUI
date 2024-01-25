import { Routes } from '@angular/router';
import { GoalsFormComponent } from './Pages/goals-form/goals-form.component';
import { GoalsDashboardComponent } from './Pages/goals-dashboard/goals-dashboard.component';
import { SelfReviewComponent } from './Pages/self-review/self-review.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { SelfReviewFormComponent } from './Pages/self-review-form/self-review-form.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'self-review', component: SelfReviewComponent },
    { path: 'self-review-form', component: SelfReviewFormComponent },
    { path: '', component: DashboardComponent },
    { path: 'create-goal', component: GoalsFormComponent},
    {path: 'Goal/:userId/:goalId', component: GoalsFormComponent}
];
