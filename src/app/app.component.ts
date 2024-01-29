import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Common/header/header.component';
import { GoalsDashboardComponent } from './Pages/goals-dashboard/goals-dashboard.component';
import { GoalsFormComponent } from './Pages/goals-form/goals-form.component';
import { FooterComponent } from './Common/footer/footer.component';
import { LoginComponent } from "./Pages/login/login.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, GoalsDashboardComponent, GoalsFormComponent, FooterComponent, LoginComponent]
})
export class AppComponent {
  title = 'achieveUI';
}
