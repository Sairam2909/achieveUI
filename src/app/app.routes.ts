import { Routes } from '@angular/router';
import { GoalsFormComponent } from './Pages/goals-form/goals-form.component';
import { SelfReviewComponent } from './Pages/self-review/self-review.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { SelfReviewFormComponent } from './Pages/self-review-form/self-review-form.component';
import { LoginComponent } from './Pages/login/login.component';
import { ViewGoalsComponent } from './Pages/view-goals/view-goals.component';
import { CanActivate } from './auth.gaurd';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [CanActivate] },
    { path: 'self-review', component: SelfReviewComponent, canActivate: [CanActivate] },
    { path: 'self-review-form', component: SelfReviewFormComponent, canActivate: [CanActivate] },
    { path: 'self-review-form/:id', component: SelfReviewFormComponent, canActivate: [CanActivate] },
    { path: 'create-goal', component: GoalsFormComponent, canActivate: [CanActivate] },
    { path: 'view-goals', component: ViewGoalsComponent, canActivate: [CanActivate] },
    { path: 'Goal/:userId/:goalId', component: GoalsFormComponent, canActivate: [CanActivate] }
];
