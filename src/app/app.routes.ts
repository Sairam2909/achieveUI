import { Routes } from '@angular/router';
import { GoalsFormComponent } from './Pages/goals-form/goals-form.component';
import { GoalsDashboardComponent } from './Pages/goals-dashboard/goals-dashboard.component';

export const routes: Routes = [
    { path: '', component: GoalsDashboardComponent },
    { path: 'create-goal', component: GoalsFormComponent}
];
