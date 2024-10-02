import { CommonModule, NgClass } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule, NgClass,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {
  expanded = true;
  sidebarMinimo = false;
  @HostBinding('class') className = '';

  items = [
    { icon: '📄', text: 'Dashboard', active: true, alert: false },
    { icon: '📊', text: 'Reports', active: false, alert: true },
    { icon: '⚙️', text: 'Settings', active: false, alert: false }
  ];

  toggleSidebar() {
    this.expanded = !this.expanded;
  }
}
