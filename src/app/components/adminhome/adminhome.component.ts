import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-adminhome',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './adminhome.component.html',
  styleUrl: './adminhome.component.css'
})
export class AdminhomeComponent {
  username: string | null = null;  // Initialize as null

  constructor(private adminservice: AdminService, private router: Router) { }

  ngOnInit(): void {
    // Assign the username when the component initializes
    this.username = sessionStorage.getItem('username');
  }

  logout(): void {
    // Clear localStorage and redirect to the home page
    localStorage.clear();
    this.adminservice.logoutadmin();  // Call your logout logic from the service
    this.router.navigate(['']);  // Navigate to the home page
  }
}