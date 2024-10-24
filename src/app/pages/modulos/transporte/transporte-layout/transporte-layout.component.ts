import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from "@angular/material/icon";
import { RouterOutlet, RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-transporte-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule, MatIconModule, RouterLink],
  templateUrl: './transporte-layout.component.html',
  styleUrl: './transporte-layout.component.css'
})
export default class TransporteLayoutComponent {

  private router = inject(Router);
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



  cerrarSesion() {
    console.log('Cerrar Sesion');
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

}
