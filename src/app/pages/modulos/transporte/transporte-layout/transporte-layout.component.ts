import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
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



  cerrarSesion() {
    console.log('Cerrar Sesion');
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

}
