import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import LayoutComponent from "../layout/layout.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, CommonModule, NgClass, LayoutComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export default class SidebarComponent {
  expanded = true;
  sidebarMinimo = false;
  // @HostBinding('class') className = '';

  toggleSidebar() {
    this.expanded = !this.expanded;
  }
}
