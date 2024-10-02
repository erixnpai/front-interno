import { CommonModule, NgClass } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { RouterLink } from '@angular/router';
import  SidebarComponent  from '../../Components/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule, NgClass, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {
  expanded = true;
  sidebarMinimo = false;
  @HostBinding('class') className = '';

  toggleSidebar() {
    this.expanded = !this.expanded;
  }
}
