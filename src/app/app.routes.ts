import { Routes } from '@angular/router';
import { GoalsFormComponent } from './Pages/goals-form/goals-form.component';
import { GoalsDashboardComponent } from './Pages/goals-dashboard/goals-dashboard.component';
import { SelfReviewComponent } from './Pages/self-review/self-review.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { SelfReviewFormComponent } from './Pages/self-review-form/self-review-form.component';
import { LoginComponent } from './Pages/login/login.component';
import { ViewGoalsComponent } from './Pages/view-goals/view-goals.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'self-review', component: SelfReviewComponent },
    { path: 'self-review-form', component: SelfReviewFormComponent },
    { path: 'create-goal', component: GoalsFormComponent},
    { path: 'view-goals', component: ViewGoalsComponent},
    { path: 'Goal/:userId/:goalId', component: GoalsFormComponent}
];
