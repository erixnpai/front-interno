import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import LayoutComponent from "../../../../Components/layout/layout.component";
import { MatIcon } from '@angular/material/icon';
import { AppComponent } from "../../../../app.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, CommonModule, NgClass, LayoutComponent, MatIcon, RouterOutlet, AppComponent],
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
