import { Routes } from '@angular/router';
import { GoalsFormComponent } from './Pages/goals-form/goals-form.component';
import { SelfReviewComponent } from './Common/self-review/self-review.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { SelfReviewFormComponent } from './Pages/self-review-form/self-review-form.component';
import { LoginComponent } from './Pages/login/login.component';
import { ViewGoalsComponent } from './Pages/view-goals/view-goals.component';
import { CanActivate } from './auth.gaurd';
import { OtherReviewFormComponent } from './Pages/other-review-form/other-review-form.component';
import { ReceivedReviewsComponent } from './Common/received-reviews/received-reviews.component';
import { ProvidedReviewsComponent } from './Common/provided-reviews/provided-reviews.component';
import { PerformanceReviewsComponent } from './Pages/performance-reviews/performance-reviews.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [CanActivate]},
    { path: 'performance-reviews', component: PerformanceReviewsComponent, canActivate: [CanActivate]},
    { path: 'self-reviews', component: SelfReviewComponent, canActivate: [CanActivate]},
    { path: 'self-review-form', component: SelfReviewFormComponent , canActivate: [CanActivate]},
    { path: 'self-review-form/:id', component: SelfReviewFormComponent , canActivate: [CanActivate]},
    { path: 'other-review-form', component: OtherReviewFormComponent , canActivate: [CanActivate]},
    { path: 'other-review-form/:id/:index', component: OtherReviewFormComponent , canActivate: [CanActivate]},
    { path: 'create-goal', component: GoalsFormComponent , canActivate: [CanActivate]},
    { path: 'view-goals', component: ViewGoalsComponent , canActivate: [CanActivate]},
    { path: 'received-reviews', component: ReceivedReviewsComponent , canActivate: [CanActivate]},
    { path: 'provided-reviews', component: ProvidedReviewsComponent , canActivate: [CanActivate]},
    { path: 'Goal/:userId/:goalId', component: GoalsFormComponent , canActivate: [CanActivate]}
    
    // { path: '', component: LoginComponent },
    // { path: 'dashboard', component: DashboardComponent },
    // { path: 'performance-reviews', component: PerformanceReviewsComponent },
    // { path: 'self-reviews', component: SelfReviewComponent },
    // { path: 'self-review-form', component: SelfReviewFormComponent  },
    // { path: 'self-review-form/:id', component: SelfReviewFormComponent },
    // { path: 'other-review-form', component: OtherReviewFormComponent  },
    // { path: 'other-review-form/:id/:index', component: OtherReviewFormComponent  },
    // { path: 'create-goal', component: GoalsFormComponent  },
    // { path: 'view-goals', component: ViewGoalsComponent  },
    // { path: 'received-reviews', component: ReceivedReviewsComponent  },
    // { path: 'provided-reviews', component: ProvidedReviewsComponent  },
    // { path: 'Goal/:userId/:goalId', component: GoalsFormComponent  }
];
