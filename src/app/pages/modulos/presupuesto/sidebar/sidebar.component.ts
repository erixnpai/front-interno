import { CommonModule, NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
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
export default class SidebarComponent  {
  expanded = true;
  sidebarMinimo = false;
  selectedItem: string = '';

  ngOnInit(): void {
    this.checkWindowSize();  // Al iniciar, revisa el tamaño de la ventana
  }
  toggleSidebar() {
    this.expanded = !this.expanded;
  }

  selectItem(item: string): void {
    this.selectedItem = item;  // Actualiza el ítem seleccionado
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkWindowSize();  // Cada vez que se redimensiona, verifica el tamaño
  }

  checkWindowSize(): void {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) { // Por debajo de 768px, colapsa la barra
      this.expanded = false;
    } else {
      this.expanded = true;
    }
  }
}
