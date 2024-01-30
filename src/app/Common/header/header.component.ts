import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthgaurdService } from '../../Services/authgaurd.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private route: Router,
              private authGaurd: AuthgaurdService) {}

  logout() {
    this.authGaurd.isLoggedIn = false;
    this.route.navigate(['../']);
  }
}
